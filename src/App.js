import { useEffect, useState } from 'react';
import { fetchBooks } from './service/book';

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBooks()
      .then(data => setBooks(data))
      .catch(err => setError(err.message || 'Error fetching books'));
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
