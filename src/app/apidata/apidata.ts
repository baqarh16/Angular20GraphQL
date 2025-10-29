import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiPost, ApiUser, GraphQL } from '../services/graphql/graphql';

@Component({
  selector: 'app-apidata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apidata.html',
  styleUrl: './apidata.css',
})
export class Apidata {
  private graphQL = inject(GraphQL);

  users: ApiUser[] = [];
  posts: ApiPost[] = [];
  loadingUsers = true;
  loadingPosts = true;

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchPosts();
  }

  fetchUsers(): void {
    this.graphQL.getApiUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loadingUsers = false;
      },
      error: (error) => {
        console.error('Error fetching API users:', error);
        this.loadingUsers = false;
      }
    });
  }

  fetchPosts(): void {
    this.graphQL.getApiPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.loadingPosts = false;
      },
      error: (error) => {
        console.error('Error fetching API posts:', error);
        this.loadingPosts = false;
      }
    });
  }
}
