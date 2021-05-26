import axios from "axios";

// LOOK INTO THIS
const API = axios.create({ baseURL: 'https://localhost3001' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  console.log(req)
  return req;
});

export default {
  getAll: function (page) {
    return axios.get("/api/school/all/" + page);
  },
  getByState: function (state, page) {
    return axios.get("/api/school/state/" + state + "/" + page);
  },
  getByCity: function (city, page) {
    return axios.get("/api/school/city/" + city + "/" + page);
  },
  getByName: function (name, page) {
    return axios.get("api/school/name/" + name + "/" + page);
  },
  getById: function (id) {
    return axios.get("api/school/id/" + id);
  },
  getByDistance: function (zip, dis, page) {
    return axios.get("api/school/dis/" + zip + "/" + dis + "/" + page);
  },
};
// do axios.post and put in ^
export const signIn = (formData) => API.post('/api/user/login', formData);
export const signUp = (formData) => API.post('/api/user/signup', formData);
