import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const authHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const httpGet = (url) => {
  return apiClient
    .get(url, { headers: authHeader() })
    .then(response => {
      console.log('GET data:', response.data);
      return response.data;
    })
    .catch(error => {
      const serverMsg = error.response?.data?.message;
      const errorMsg = error.message || 'GET failed';
      const finalMsg = serverMsg || errorMsg;

      console.error('GET request error:', finalMsg);
      throw new Error(finalMsg);
    });
};

export const httpPost = (url, body) => {
  return apiClient
    .post(url, body, { headers: authHeader() })
    .then(response => {
      console.log('POST data:', response.data);
      return response.data;
    })
    .catch(error => {
      const serverMsg = error.response?.data?.message;
      const errorMsg = error.message || 'POST failed';
      const finalMsg = serverMsg || errorMsg;

      console.error('POST request error:', finalMsg);
      throw new Error(finalMsg);
    });
};
