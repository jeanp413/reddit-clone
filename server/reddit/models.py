from django.db import models
from datetime import datetime
import pytz
from reddit import constants as CONSTANTS

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=CONSTANTS.MAX_POST_TITLE_LEN)
    text = models.CharField(max_length=CONSTANTS.MAX_POST_TEXT_LEN)
    thumbnail = models.URLField(max_length=CONSTANTS.MAX_LINK_LEN, blank=True)

    votes = models.IntegerField(default=0, blank=True)

    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-votes']

    def __repr__(self):
        return '<Post %r>' % (self.title[:50])

    def getAllComments(self):
        commentList = []
        for c in self.comments.filter(depth=0):
            _l = c.getAllChildren(include_self=True)
            if len(_l) > 0:
                commentList.extend(_l)
        return commentList

    def getAllCommentsCount(self):
        return len(self.getAllComments())

    def getAge(self):
        return (self.created_on - datetime(1970, 1, 1, tzinfo=pytz.UTC)).total_seconds() * 1000

    def addComment(self, comment_text, comment_parent=None):
        comment = Comment(post=self, text=comment_text, parent=comment_parent)
        comment.save()
        return comment

    def vote(self, type):
        value = {'upvote':1, 'downvote':-1}[type]
        self.votes += value
        self.save()

class Comment(models.Model):
    text = models.CharField(max_length=CONSTANTS.MAX_COMMENT_TEXT_LEN)

    votes = models.IntegerField(default=0, blank=True)
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    parent = models.ForeignKey('self', null=True, related_name='children',on_delete=models.CASCADE)
    depth = models.IntegerField(default=0, blank=True)

    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-votes']

    def __repr__(self):
        return '<Comment %r>' % (self.text[:50])

    def getAllChildren(self, include_self=True):
        """
        https://stackoverflow.com/questions/4725343/django-self-recursive-foreignkey-filter-query-for-all-childs/4726398
        """
        childList = []
        if include_self:
            childList.append(self)
        for c in Comment.objects.filter(parent=self):
            _l = c.getAllChildren(include_self=True)
            if len(_l) > 0:
                childList.extend(_l)
        return childList

    def getAllChildrenCount(self):
        return len(self.getAllChildren(include_self=False))

    def getAge(self):
        return (self.created_on - datetime(1970, 1, 1, tzinfo=pytz.UTC)).total_seconds() * 1000

    def addComment(self, comment_text):
        comment = Comment(post=self.post, text=comment_text, parent=self)
        comment.save()
        return comment

    def vote(self, type):
        value = {'upvote':1, 'downvote':-1}[type]
        self.votes += value
        self.save()

    def save(self, *args, **kwargs):
        if self.parent:
            self.depth = self.parent.depth + 1
        super(Comment, self).save(*args, **kwargs)