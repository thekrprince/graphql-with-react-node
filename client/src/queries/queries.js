import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

export const GET_AUTHORS = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
