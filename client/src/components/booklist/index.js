import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_BOOKS } from '../../queries/queries';
import BookDetails from '../book-details';

const BookList = () => {
  const { loading, data } = useQuery(GET_BOOKS);
  const [bookId, setBookId] = useState();

  const displayBooks = () => {
    if (loading) {
      return <p>Loading Books...</p>;
    } else {
      return (
        <div>
          {data.books.map((book) => (
            <ul key={book.id}>
              <li onClick={() => setBookId(book.id)} className="book">
                {book.name}
              </li>
            </ul>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="booklist">
      <h4>Book List</h4>
      {displayBooks()}
      <BookDetails bookId={bookId} />
    </section>
  );
};

export default BookList;
