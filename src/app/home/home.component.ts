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

  updateVote(postId: number, type: string) {
    if (this.pendingRequest) {
      return;
    }

    const value = ({ upvote: 1, downvote: -1 })[type];
    const idx = this.hotPosts.findIndex(p => p.id === postId);
    const post = this.hotPosts[idx];

    this.pendingRequest = true;
    this.postsService.updatePostVote(post.id, post.votes + value)
      .subscribe(updatedPost => {
        this.hotPosts[idx] = updatedPost;
        this.hotPosts.sort((a, b) => (b.votes - a.votes));
        this.pendingRequest = false;
      });
  }

}
