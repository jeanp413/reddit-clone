import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommentVotingService {

  private commentVoteSource = new Subject<{ commentId: number, type: string }>();
  commentVoteDispatched$ = this.commentVoteSource.asObservable();

  constructor() { }

  emitCommentVote(commentVote: { commentId: number, type: string }) {
    this.commentVoteSource.next(commentVote);
  }
}
