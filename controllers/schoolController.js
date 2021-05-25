// const axios = require("axios");
const { response } = require("express");
const fetch = require("node-fetch");
// const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?page=0&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
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
  },
  findByState: function (req, res) {
    const state = req.params.state;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=" +
        state +
        "&page=0&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  findByCity: function (req, res) {
    const city = req.params.city;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.city=" +
        city +
        "&page=0&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  findByName: function (req, res) {
    const name = req.params.name;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=" +
        name +
        "&page=0&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
