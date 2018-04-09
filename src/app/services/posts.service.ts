import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  getHotPosts(): Observable<PostPreview[]> {
    return this.http.get<PostPreview[]>('api/posts/?format=json');
    // const newPostArray: PostPreview[] = HOTPOSTS.map(p => {
    //   const { comments, ...rest } = p;
    //   return rest;
    // });
    // newPostArray.sort((a, b) => (b.votes - a.votes));
    // return Observable.of(newPostArray).delay(1000);
  }

  getPost(postId: number): Observable<Post> {
    return this.http.get<Post>(`api/posts/${postId}/?format=json`);
    // const postData = HOTPOSTS.find(post => post.id === postId);
    // return Observable.of(expandPostData(postData)).delay(1000);
  }

  // updatePostVote(postId: number, updatedVotes: number): Observable<PostPreview> {
  //   const idx = HOTPOSTS.findIndex(post => post.id === postId);
  //   const postData = HOTPOSTS[idx];
  //   const updatedPostData = {
  //     ...postData,
  //     votes: updatedVotes
  //   };
  //   HOTPOSTS[idx] = updatedPostData;
  //   const { comments, ...rest } = updatedPostData;
  //   return Observable.of(rest).delay(1000);
  // }

  // updateCommentVote(commentId: number, updatedVotes: number): Observable<CommentPreview> {
  //   const idx = COMMENTS.findIndex(comment => comment.id === commentId);
  //   const commentData = COMMENTS[idx];
  //   const updatedCommentData = {
  //     ...commentData,
  //     votes: updatedVotes
  //   };
  //   COMMENTS[idx] = updatedCommentData;
  //   const { children, ...rest } = updatedCommentData;
  //   return Observable.of(rest).delay(1000);

  // }

  updateVotePost(id: number, type: string): Observable<PostPreview> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<PostPreview>('api/vote/', { "target": "post", id, type }, httpOptions);
  }

  updateVoteComment(id: number, type: string): Observable<PostPreview> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<PostPreview>('api/vote/', { "target": "comment", id, type }, httpOptions);
  }

  addNewPost(newPostData: any): Observable<PostPreview> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<PostPreview>('api/posts/', newPostData, httpOptions);
  }
}
