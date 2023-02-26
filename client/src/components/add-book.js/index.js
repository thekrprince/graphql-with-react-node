import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  GET_AUTHORS,
  ADD_BOOK_MUTATION,
  GET_BOOKS,
} from '../../queries/queries';

const AddBook = () => {
  const { loading, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK_MUTATION, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
  const [bookName, setBookName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState(null);

  const addBookHandler = (e) => {
    e.preventDefault();
    addBook({ variables: { name: bookName, genre, authorId } });
    setBookName('');
    setGenre('');
    setAuthorId(null);
  };

  return (
    <form onSubmit={addBookHandler} className="form">
      <h4>Add a Book</h4>
      <div>
        <label htmlFor="bname">Book Name:</label>
        <input
          type="text"
          id="bname"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="authors">Select Author:</label>
        <select
          id="authors"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        >
          <option>Select Author</option>
          {loading && <option disabled>Loading Authors...</option>}
          {data &&
            data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBook;
