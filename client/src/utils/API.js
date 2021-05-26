import axios from "axios";

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
