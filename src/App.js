import { useState } from 'react';
import { fetchBooks } from './service/book';
import {login,logout,register } from './service/auth';


function App() {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('adm');
  const [password, setPassword] = useState('12');

  const loadBooks = async () => {
    try {
      const data = await fetchBooks(token);
      setBooks(data);
    } catch (err) {
      setError(err.message || 'Error fetching books');
    }
  };


  const loginUser = async () => {
    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setError('');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };


  const registerUser = async () => {
    try {
      const data = await register(username, password);
    } catch (err) {
      setError(err.message || 'Register failed');
    }
  };


   const logOutUser = async () => {
    try {
      const response = await logout(token);
      if(response.success){
        localStorage.removeItem('token');
        setToken(null);
        setError('');
      }
     
    } catch (err) {
      setError(err.message || 'Logout failed');
    }
  };


  

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 12 }}>
        <button onClick={registerUser} style={{ marginLeft: 8 }}>Register</button>
        <button onClick={loginUser}>Login</button>
        <button onClick={logOutUser} style={{ marginLeft: 8 }}>Log Out</button>
      </div>
      <button onClick={loadBooks} style={{ marginBottom: 12 }}>Show Books</button>
      <ul>
        {books.map(b => <li key={b.id}>{b.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
