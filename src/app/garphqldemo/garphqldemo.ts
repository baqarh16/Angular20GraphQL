// garphqldemo.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { GraphQL, Post, User } from '../services/graphql/graphql';

@Component({
  selector: 'app-garphqldemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garphqldemo.html',
  styleUrl: './garphqldemo.css',
})
export class Garphqldemo implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  loadingUsers = true;
  loadingPosts = true;

  graphQLService: GraphQL = inject(GraphQL);

  ngOnInit(): void {
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