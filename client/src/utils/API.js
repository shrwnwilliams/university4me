import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost3001' });

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

export const signIn = (formData) => API.post('/api/user/login', formData);
export const signUp = (formData) => API.post('/api/user/signup', formData);
