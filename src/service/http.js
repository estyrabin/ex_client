import axios from 'axios';

export const httpGet = (url) => {
  return axios.get(url);
};

export const httpPost = (url, body) => {
  return axios.post(url, body);
};
