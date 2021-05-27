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
//  err => {
//   console.log('am I here?')
//   throw new Error(err.response.data.message);
// }
);

export const signIn = (formData) => API.post('/api/user/login', formData);
export const signUp = (formData) => API.post('/api/user/signup', formData);