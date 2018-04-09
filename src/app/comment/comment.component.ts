import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Comment, CommentPreview } from '../shared/comment';
import { CommentVotingService } from '../services/comment-voting.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: Comment;
  showNewCommentForm: boolean = false;
  showChildren: boolean = true;

  // TODO: update totalChildren and totalComments values when the new comment
  // is received from server

  constructor(
    private commentVotingService: CommentVotingService
  ) { }

  handleVoteComment(type: string) {
    this.commentVotingService.emitCommentVote({ commentId: this.comment.id, type });
  }

  handleShowCommentForm(visible: boolean) {
    this.showNewCommentForm = visible;
  }

  handleCommentSubmitedSuccess(newCommentPreview: CommentPreview) {
    const newComment: Comment = {
      ...newCommentPreview,
      children: []
    };
    this.comment.children.push(newComment);
    this.handleShowCommentForm(false);
  }

  handleShowChildrenClicked() {
    this.showChildren = !this.showChildren;
  }
}
