import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GraphQL, Post, User } from '../services/graphql/graphql';

@Component({
  selector: 'app-mockdata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mockdata.html',
  styleUrls: ['./mockdata.css'],
})
export class Mockdata {
  users: User[] = [];
  posts: Post[] = [];
  loadingUsers = true;
  loadingPosts = true;
  private graphQLService: GraphQL = inject(GraphQL);

  constructor() {
    this.fetchUsers();
    this.fetchPosts();
  }

  fetchUsers(): void {
    this.graphQLService.getUsers().subscribe({
      next: (users) => {
        this.users = users; // Now correctly typed as User[]
        this.loadingUsers = false;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.loadingUsers = false;
      }
    });
  }

  fetchPosts(): void {
    this.graphQLService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts; // Now correctly typed as Post[]
        this.loadingPosts = false;
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
        this.loadingPosts = false;
      }
    });
  }
}
