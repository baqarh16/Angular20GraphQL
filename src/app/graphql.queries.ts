import { gql } from '@apollo/client/core';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      role
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      role
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      authorId
    }
  }
`;

export const GET_API_USERS = gql`
  query GetApiUsers {
    users {
      data {
        id
        name
        email
        username
      }
    }
  }
`;

export const GET_API_POSTS = gql`
  query GetApiPosts {
    todos {
      data {
        id
        title
        completed
        user {
          id
          name
        }
      }
    }
  }
`;

export const GET_API_USER = gql`
  query GetApiUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      username
    }
  }
`;