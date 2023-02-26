import { useQuery } from '@apollo/client';
import React from 'react';
import { getBookQuery } from '../../queries/queries';

const BookDetails = ({ bookId }) => {
  const { data, loading } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  const displayDetails = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (data.book) {
      return (
        <div className="book-details">
          <h2>Book Details</h2>
          <div>
            <h2>{data?.book?.name}</h2>
            <p>{data?.book?.genre}</p>
            <p>{data?.book?.author.name}</p>
            <p>All books by this author:</p>
            <ul className="other-books">
              {data?.book?.author.books.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
      );
    }

    return <h2>No Book Selected...</h2>;
  };

  return <div className="book-details">{displayDetails()}</div>;
};

export default BookDetails;
