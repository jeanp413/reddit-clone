from rest_framework import serializers
from reddit import constants as CONSTANTS
from reddit.models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())
    parent = serializers.PrimaryKeyRelatedField(queryset=Comment.objects.all(), allow_null=True)
    depth = serializers.IntegerField(read_only=True)
    age = serializers.IntegerField(source='getAge', read_only=True)
    totalChildren = serializers.IntegerField(source='getAllChildrenCount', read_only=True)
    children = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ('id', 'text', 'votes', 'post', 'parent', 'depth', 'age', 'totalChildren', 'children')

    def get_children(self, obj):
        """ self referral field """
        serializer = CommentSerializer(
            instance=obj.children.all(),
            many=True
        )
        return serializer.data

class PostSerializer(serializers.ModelSerializer):
    age = serializers.IntegerField(source='getAge', read_only=True)
    totalComments = serializers.IntegerField(source='getAllCommentsCount', read_only=True)
    comments = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'text', 'thumbnail', 'votes', 'age', 'totalComments', 'comments')

    def get_comments(self, obj):
        """ self referral field """
        serializer = CommentSerializer(
            instance=obj.comments.filter(depth=0),
            many=True
        )
        return serializer.data


"""
Simple serializers without recursion
"""
class CommentPreviewSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())
    parent = serializers.PrimaryKeyRelatedField(queryset=Comment.objects.all(), allow_null=True)
    depth = serializers.IntegerField(read_only=True)
    age = serializers.IntegerField(source='getAge', read_only=True)
    totalChildren = serializers.IntegerField(source='getAllChildrenCount', read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'text', 'votes', 'post', 'parent', 'depth', 'age', 'totalChildren')

class PostPreviewSerializer(serializers.ModelSerializer):
    age = serializers.IntegerField(source='getAge', read_only=True)
    totalComments = serializers.IntegerField(source='getAllCommentsCount', read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'text', 'thumbnail', 'votes', 'age', 'totalComments')