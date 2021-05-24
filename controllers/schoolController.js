// const axios = require("axios");
const fetch = require("node-fetch")
// const db = require("../models");

module.exports = {  
  findAll: function (req, res) {
    
    fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?page=0&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
  // findByState: function(req, res) {

  // }
};
