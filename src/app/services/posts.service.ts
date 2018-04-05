import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { PostPreview, HOTPOSTS } from '../shared/post';

@Injectable()
export class PostsService {

  constructor() { }

  getHotPosts(): Observable<PostPreview[]> {
    // return this.http.get<Dish[]>(this.baseURL + 'dishes');
    let newPostArray = HOTPOSTS.map(p => ({ ...p }));
    newPostArray.sort((a, b) => (b.votes - a.votes))
    return Observable.of(newPostArray).delay(1000);
  }

  updatePostVote(postId: number, updatedVotes: number): Observable<PostPreview> {
    const idx = HOTPOSTS.findIndex(post => post.id === postId);
    const post = HOTPOSTS[idx];
    let updatedPost = {
      ...post,
      votes: updatedVotes
    }
    HOTPOSTS[idx] = updatedPost;
    return Observable.of(updatedPost).delay(1000);
  }

};