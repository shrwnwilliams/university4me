import axios from "axios";

const API = axios.create({ baseURL: 'https://localhost3001' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  console.log(req)
  return req;
});

export const signIn = (formData) => API.post('/api/user/login', formData);
export const signUp = (formData) => API.post('/api/user/signup', formData);