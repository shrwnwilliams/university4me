import axios from "axios";

export default {
    getAll: function(){
        return axios.get("/api/school/all");
    },
    getByState: function(){
        return axios.get("/api/school/state/:state")
    },
    getByCity: function(){
        return axios.get("/api/school/city/:city")
    },
    getByName: function(){
        return axios.get("api/school/:name")
    },
    getById: function(){
        return axios.get("api/school/:id")
    }
};
