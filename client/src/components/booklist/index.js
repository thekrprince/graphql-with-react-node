import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../queries/queries';

const BookList = () => {
  const { loading, data } = useQuery(GET_BOOKS);
  console.log(loading);
  console.log(data);

  const displayBooks = () => {
    if (loading) {
      return <p>Loading Books...</p>;
    } else {
      return (
        <div>
          {data.books.map((book) => (
            <ul key={book.id}>
              <li>{book.name}</li>
              <li>{book.genre}</li>
            </ul>
          ))}
        </div>
      );
    }
  };

  return (
    <section>
      <h4>Book List</h4>
      {displayBooks()}
    </section>
  );
};

export default BookList;
