import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { PostPreview, Post, HOTPOSTS } from '../shared/post';
import { CommentPreview, Comment, COMMENTS } from '../shared/comment';

function expandComments(commentsIds: number[]): Comment[] {
  return commentsIds.map((commentId) => {
    const commentData = COMMENTS.find((comment) => comment.id === commentId);
    return { ...commentData, children: expandComments(commentData.children) };
  });
}

function expandPostData(postData: any): Post {
  return { ...postData, comments: expandComments(postData.comments) };
}

@Injectable()
export class PostsService {

  constructor() { }

  getHotPosts(): Observable<PostPreview[]> {
    // return this.http.get<Dish[]>(this.baseURL + 'dishes');
    let newPostArray: PostPreview[] = HOTPOSTS.map(p => {
      const { comments, ...rest } = p;
      return rest;
    });
    newPostArray.sort((a, b) => (b.votes - a.votes))
    return Observable.of(newPostArray).delay(1000);
  }

  getPost(postId: number): Observable<Post> {
    const postData = HOTPOSTS.find(post => post.id === postId);
    return Observable.of(expandPostData(postData)).delay(1000);
  }

  updatePostVote(postId: number, updatedVotes: number): Observable<PostPreview> {
    const idx = HOTPOSTS.findIndex(post => post.id === postId);
    const postData = HOTPOSTS[idx];
    const updatedPostData = {
      ...postData,
      votes: updatedVotes
    };
    HOTPOSTS[idx] = updatedPostData;
    const { comments, ...rest } = updatedPostData;
    return Observable.of(rest).delay(1000);
  }

  updateCommentVote(commentId: number, updatedVotes: number): Observable<CommentPreview> {
    const idx = COMMENTS.findIndex(comment => comment.id === commentId);
    const commentData = COMMENTS[idx];
    const updatedCommentData = {
      ...commentData,
      votes: updatedVotes
    };
    COMMENTS[idx] = updatedCommentData;
    const { children, ...rest } = updatedCommentData;
    return Observable.of(rest).delay(1000);
  }

};