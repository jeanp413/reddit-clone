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

  constructor(
    private commentVotingService: CommentVotingService
  ) { }

  handleVoteComment(type: string) {
    this.commentVotingService.emitCommentVote({ commentId: this.comment.id, type });
  }

}
