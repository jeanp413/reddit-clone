import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PostComponent } from '../post/post.component';
import { PostFormComponent } from '../post-form/post-form.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'newpost', component: PostFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];