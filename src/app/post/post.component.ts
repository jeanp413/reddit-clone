import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Post, PostPreview } from '../shared/post';
import { Comment, CommentPreview } from '../shared/comment';
import { PostsService } from '../services/posts.service';
import { CommentVotingService } from '../services/comment-voting.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [CommentVotingService]
})
export class PostComponent implements OnInit {
  post: Post;
  pendingRequest: boolean = false;

  constructor(
    private postsService: PostsService,
    private commentVotingService: CommentVotingService,
    private route: ActivatedRoute,
  ) {
    commentVotingService.commentVoteDispatched$.subscribe(
      voteEvent => this.updateVoteComment(voteEvent.commentId, voteEvent.type)
    );
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postsService.getPost(+params.get('id')))
      .subscribe(post => {
        this.post = post;
      });
  }

  updateVote(type: string) {
    if (this.pendingRequest) {
      return;
    }

    // const value = ({ upvote: 1, downvote: -1 })[type];
    const post = this.post;

    this.pendingRequest = true;
    this.postsService.updateVotePost(post.id, type)
      .subscribe(updatedPostPreview => {
        const updatedPost = {
          ...post,
          votes: updatedPostPreview.votes
        }
        this.post = updatedPost;
        this.pendingRequest = false;
      });
  }

  private findComment(commentId: number, comments: Comment[]): Comment {
    for (const c of comments) {
      if (c.id === commentId) {
        return c;
      }

      const comment = this.findComment(commentId, c.children);
      if (comment) {
        return comment;
      }
    }

    return null;
  }

  updateVoteComment(commentId: number, type: string) {
    if (this.pendingRequest) {
      return;
    }

    // const value = ({ upvote: 1, downvote: -1 })[type];
    const comment = this.findComment(commentId, this.post.comments);

    this.pendingRequest = true;
    this.postsService.updateVoteComment(comment.id, type)
      .subscribe(updatedCommentPreview => {
        // TODO: think this is ok, nonetheless check
        // https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
        // or google "angular change detection"
        comment.votes = updatedCommentPreview.votes;
        this.pendingRequest = false;
      });
  }

}
