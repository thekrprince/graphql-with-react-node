import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

export const GET_AUTHORS = gql`
  {
    authors {
      name
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

export const getBookQuery = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
