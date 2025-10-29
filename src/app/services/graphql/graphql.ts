// graphql.service.ts
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { apolloClientFactory } from '../../graphql.provider';
import { GET_POSTS, GET_USER, GET_USERS } from '../../graphql.queries';

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

@Injectable({
  providedIn: 'root'
})
export class GraphQL {
  private client = apolloClientFactory();

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
}