import axios from "axios";

export default {
  getAll: function (page) {
    return axios.get("/api/school/all/" + page);
  },
  getByState: function (state) {
    return axios.get("/api/school/state/" + state);
  },
  getByCity: function (city) {
    return axios.get("/api/school/city/" + city);
  },
  getByName: function (name) {
    return axios.get("api/school/name/" + name);
  },
  getById: function (id) {
    return axios.get("api/school/id/" + id);
  },
  getByDistance: function (zip, dis) {
    return axios.get("api/school/" + zip + "/" + dis);
  },
};
