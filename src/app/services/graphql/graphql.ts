// graphql.service.ts
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { apolloClientFactory, createApolloClient } from '../../graphql.provider';
import { GET_API_POSTS, GET_API_USER, GET_API_USERS, GET_POSTS, GET_USER, GET_USERS } from '../../graphql.queries';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
}

export interface ApiUser {
  id: string;
  name: string;
  email: string;
  username?: string;
}

export interface ApiPost {
  id: string;
  title: string;
  completed: boolean;
  user: {
    id: string;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class GraphQL {
  private client = apolloClientFactory();
  private apiClient = createApolloClient();

  getUsers(): Observable<User[]> {
    return from(
      this.client.query<{ users: User[] }>({ query: GET_USERS })
        .then(result => {
          if (!result.data) {
            throw new Error('Failed to fetch users: no data');
          }
          return result.data.users;
        })
    );
  }

  getUser(id: string): Observable<User> {
    return from(
      this.client.query<{ user: User }>({
        query: GET_USER,
        variables: { id }
      })
        .then(result => {
          if (!result.data?.user) {
            throw new Error(`User with id ${id} not found`);
          }
          return result.data.user;
        })
    );
  }

  getPosts(): Observable<Post[]> {
    return from(
      this.client.query<{ posts: Post[] }>({ query: GET_POSTS })
        .then(result => {
          if (!result.data) {
            throw new Error('Failed to fetch posts: no data');
          }
          return result.data.posts;
        })
    );
  }
  
  getApiUsers(): Observable<ApiUser[]> {
    return from(
      this.apiClient
        .query<{ users: { data: ApiUser[] } }>({ query: GET_API_USERS })
        .then(r => (r.data?.users?.data ?? []).slice(0, 5)) // Limit to 5
    );
  }

  getApiPosts(): Observable<ApiPost[]> {
    return from(
      this.apiClient
        .query<{ todos: { data: ApiPost[] } }>({ query: GET_API_POSTS })
        .then(r => (r.data?.todos?.data ?? []).slice(0, 5)) // Limit to 5
    );
  }

  getApiUser(id: string): Observable<ApiUser> {
    return from(
      this.apiClient
        .query<{ user: ApiUser }>({
          query: GET_API_USER,
          variables: { id }
        })
        .then(result => {
          if (!result.data?.user) {
            throw new Error(`User with id ${id} not found`);
          }
          return result.data.user;
        })
    );
  }
}