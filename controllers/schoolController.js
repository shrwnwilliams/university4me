// const axios = require("axios");
const { response } = require("express");
const fetch = require("node-fetch");
// const db = require("../models");

// school.operating__not=0&

// state checking for every parameter, which, if they're there, they concat onto api call
// store input in state

module.exports = {
  findAll: function (req, res) {
    const page = req.params.page;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?page=" +
        page +
        "&per_page=30&school.operating__not=0&fields=school.city,school.state,school.zip,school.school_url,school.name,id,latest.student.size,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.cost.tuition.program_year,latest.admissions.admission_rate.overall,latest.admissions.act_scores.midpoint,latest.admissions.sat_scores.midpoint&page=0&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  findByState: function (req, res) {
    const page = req.params.page;
    const state = req.params.state;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=" +
        state +
        "&school.operating__not=0&fields=school.city,school.state,school.zip,school.school_url,school.name,id,latest.student.size,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.cost.tuition.program_year,latest.admissions.admission_rate.overall,latest.admissions.act_scores.midpoint,latest.admissions.sat_scores.midpoint&page=" +
        page +
        "&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  findByCity: function (req, res) {
    const page = req.params.page;
    const city = req.params.city;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.city=" +
        city +
        "&school.operating__not=0&fields=school.city,school.state,school.zip,school.school_url,school.name,id,latest.student.size,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.cost.tuition.program_year,latest.admissions.admission_rate.overall,latest.admissions.act_scores.midpoint,latest.admissions.sat_scores.midpoint&page=" +
        page +
        "&per_page=30&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  findByName: function (req, res) {
    const page = req.params.page;
    const name = req.params.name;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=" +
        name +
        "&page=0&per_page=30&school.operating__not=0&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  findById: function (req, res) {
    const id = req.params.id;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?id=" +
        id +
        "&page=0&per_page=30&school.operating__not=0&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  findByDistance: function (req, res) {
    const page = req.params.page;
    const zip = req.params.zip;
    const dis = req.params.dis;
    fetch(
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?zip=" +
        zip +
        "&distance=" +
        dis +
        "mi&page=0&per_page=30&school.operating__not=0&api_key=nd99fVPekGDGKSjaZ64uf9yEA7pvkWBod1HYhWAK"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

// school: {
//   zip: '13211-1003', NO
//   city: 'Mattydale', YES
//   name: 'Continental School of Beauty Culture-Mattydale', YES
//   alias: null,
//   state: 'NY', YES
//   locale: 21, YES
//   search: 'Continental School of Beauty Culture-Mattydale',
//   branches: 2, YES
//   men_only: 0, YES
//   operating: 1, YES
// id: 467094, YES
// student: {
//   size: 14759, YES
// }
// cost: {
//   tuition: { in_state: 51853, out_of_state: 51853, program_year: null }, YES
// }
