from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from reddit import views

urlpatterns = [
    url(r'^api/posts/$', views.PostList.as_view()),
    url(r'^api/posts/(?P<pk>[0-9]+)/$', views.PostDetail.as_view()),
    url(r'^api/comments/$', views.CommentList.as_view()),
    url(r'^api/comments/(?P<pk>[0-9]+)/$', views.CommentDetail.as_view()),
    url(r'^api/vote/$', views.Vote.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)