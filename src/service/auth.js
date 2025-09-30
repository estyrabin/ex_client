import {httpPost } from './http';

export const register = (username, password) => {
  return httpPost('/register', { username, password });
};

export const login = (username, password) => {
  return httpPost('/login', { username, password });
};

export const logout = (token) => {
  return httpPost('/logout', {token}).catch(   
  );
};
