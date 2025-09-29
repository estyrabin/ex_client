import { httpGet } from './http';

export const fetchBooks = () => {
  return httpGet('http://localhost:3000/api/book')
    .then(response => {
      console.log('Books:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Failed to fetch books:', error);
      throw error;
    });
};
