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

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getHotPosts().subscribe(hotPosts => this.hotPosts = hotPosts);
  }

}
