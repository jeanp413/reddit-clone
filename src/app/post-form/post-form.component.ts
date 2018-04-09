import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post, PostPreview } from '../shared/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  newPostForm: FormGroup;
  formErrors = {
    title: '',
    thumbnail: '',
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
    this.newPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(150)]],
      thumbnail: ['', [Validators.required, Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi)]],
      text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });

    this.newPostForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages
  }

  onValueChanged(data?: any) {
    // if (!this.newPostForm)
    //   return;

    // const form = this.newPostForm;
    // for (const field in this.formErrors) {
    //   this.formErrors[field] = '';

    //   const control = form.get(field);
    //   if (control && control.dirty && control.invalid) {
    //     const messages = this.validationMessages[field];

    //     for (const key in control.errors) {
    //       this.formErrors[field] += messages[key] + ' ';
    //     }
    //   }
    // }
  }

  onSubmit() {
    const newPostFormData = this.newPostForm.value;
    let newPostData = {
      title: newPostFormData.title,
      thumbnail: newPostFormData.thumbnail,
      text: newPostFormData.text
    };

    this.pendingRequest = true;
    this.postsService.addNewPost(newPostData)
      .subscribe(newPost => {
        this.goBack();
      });

    this.newPostForm.reset({
      title: '',
      thumbnail: '',
      text: ''
    });
  }

  goBack() {
    this.location.back();
  }
}
