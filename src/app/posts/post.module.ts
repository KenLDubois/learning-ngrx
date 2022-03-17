import { NgModule } from '@angular/core';
import { PostsShellComponent } from './posts-shell/posts-shell.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const postRoutes: Routes = [{ path: '', component: PostsShellComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(postRoutes)],
  declarations: [PostsShellComponent, PostsListComponent, PostDetailComponent],
})
export class PostModule {}
