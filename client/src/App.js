import './App.css';
import AddBook from './components/add-book.js';
import BookList from './components/booklist';

function App() {
  return (
    <div className="App">
      <h1>GraphQL</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
