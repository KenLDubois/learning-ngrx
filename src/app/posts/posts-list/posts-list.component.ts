import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit, OnDestroy {
  errorMessage: string;

  displayCode: boolean;

  posts: Post[];

  showId: boolean = false;

  // Used to highlight the selected product in the list
  selectedPost: Post | null;
  sub: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.sub = this.postService.selectedPostChanges$.subscribe(
      (currentPost) => (this.selectedPost = currentPost)
    );

    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => (this.posts = posts),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(): void {
    this.displayCode = !this.displayCode;
  }

  newProduct(): void {
    this.postService.changeSelectedPost(this.postService.newPost());
  }

  productSelected(post: Post): void {
    this.postService.changeSelectedPost(post);
  }
}
