import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Comment, CommentPreview } from '../shared/comment';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() postId: number;
  @Input() parentId: number;
  @Output() onCancelClicked = new EventEmitter();
  @Output() onCommentSubmitedSuccess = new EventEmitter<CommentPreview>();
  newCommentForm: FormGroup;
  formErrors = {
    text: ''
  };
  pendingRequest: boolean = false;

  constructor(
    private postsService: PostsService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.newCommentForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
    });

    // this.newPostForm.valueChanges
    //   .subscribe(data => this.onValueChanged(data));
  }

  handleCancelClicked() {
    this.onCancelClicked.emit();
  }

  onSubmit() {
    const newCommentFormData = this.newCommentForm.value;
    let newCommentData = {
      text: newCommentFormData.text,
      post: this.postId,
      parent: this.parentId
    };

    this.pendingRequest = true;
    this.postsService.addNewComment(newCommentData)
      .subscribe(newComment => {
        this.pendingRequest = false;
        this.onCommentSubmitedSuccess.emit(newComment);
      });

    this.newCommentForm.reset({
      text: ''
    });
  }

}
