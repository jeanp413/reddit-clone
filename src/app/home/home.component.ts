import { Component, OnInit } from '@angular/core';

import { PostPreview } from '../shared/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotPosts: PostPreview[];
  pendingRequest: boolean = false;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getHotPosts().subscribe(hotPosts => {
      this.hotPosts = hotPosts
    });
  }

  upvotePost(postId: number) {
    if (this.pendingRequest) {
      return;
    }

    this.pendingRequest = true;
    const idx = this.hotPosts.findIndex(p => p.id === postId);
    const post = this.hotPosts[idx];
    this.postsService.updatePostVote(post.id, post.votes + 1)
      .subscribe(updatedPost => {
        this.hotPosts[idx] = updatedPost;
        this.pendingRequest = false;
      });
  }

  downvotePost(postId: number) {
    if (this.pendingRequest) {
      return;
    }

    this.pendingRequest = true;
    const idx = this.hotPosts.findIndex(p => p.id === postId);
    const post = this.hotPosts[idx];
    this.postsService.updatePostVote(post.id, post.votes - 1)
      .subscribe(updatedPost => {
        this.hotPosts[idx] = updatedPost;
        this.pendingRequest = false;
      });
  }

}
