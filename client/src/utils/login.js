import axios from "axios";

const API = axios.create({});

API.interceptors.request.use((req) => {
  console.log("outside")
  if (localStorage.getItem('profile')) {
    console.log("inside")
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    console.log(req)
    return req;
  }
  return req;
},
);

export const signIn = (formData) => API.post('/api/user/login', formData);
export const signUp = (formData) => API.post('/api/user/signup', formData);
export const act = (formData) => API.put('/api/user/act', formData);
export const sat = (formData) => API.put('/api/user/act', formData);