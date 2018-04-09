from django.http import Http404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from reddit.models import Post, Comment
from reddit.serializers import PostSerializer, CommentSerializer, PostPreviewSerializer, CommentPreviewSerializer

# Create your views here.

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostPreviewSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentPreviewSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class Vote(APIView):

    def get_post(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get_comment(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise Http404

    def post(self, request, format=None):
        data = request.data

        validType = ['upvote', 'downvote']
        if data['type'] not in ['upvote', 'downvote']:
            Response(status=status.HTTP_400_BAD_REQUEST)

        if data['target'] == 'post':
            post = self.get_post(data['id'])
            post.vote(data['type'])
            serializer = PostPreviewSerializer(post)
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        elif data['target'] == 'comment':
            comment = self.get_comment(data['id'])
            comment.vote(data['type'])
            serializer = CommentPreviewSerializer(comment)
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(status=status.HTTP_400_BAD_REQUEST)
