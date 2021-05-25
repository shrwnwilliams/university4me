const axios = require("axios");
// const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    axios
      .get(
        "https://api.data.gov/ed/collegescorecard/v1/schools.json?page=0&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
      )
      .then((schools) => {
          res.json(schools);
          console.log(schools);
        })
      .catch((err) => res.status(404).json(err));
  },
  findByState: function(req, res) {

  }
};
