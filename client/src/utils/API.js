import axios from "axios";

export default {
    getAll: function(){
        return axios.get("/api/school/all");
    }
}