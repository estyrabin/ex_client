import { httpGet } from './http';

export const fetchBooks = () => {
  return httpGet('/book');
};

