import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_AUTHORS = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

const AddBook = () => {
  const { loading, data } = useQuery(GET_AUTHORS);

  console.log(data);

  const addBookHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <form onSubmit={addBookHandler} className="form">
      <h4>Add a Book</h4>
      <div>
        <label htmlFor="bname">Book Name:</label>
        <input type="text" id="bname" required />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input type="text" id="genre" required />
      </div>
      <div>
        <label htmlFor="authors">Select Author:</label>
        <select id="authors">
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
