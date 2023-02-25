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
