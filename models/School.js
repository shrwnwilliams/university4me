const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    id: { 
        type: String, 
        required: true,
        unique: true 
    },
    school: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    
  });
  
  const School = mongoose.model("School", schoolSchema);
  
  module.exports = School;

  
// School.create({
//     id: "1",
//     school: "school",
//     city: "city",
//     state: "state",
//     zipcode: "zip",
//     url: "url",
// }).then (schoolModel => console.log(schoolModel))
// .catch (err => console.log(err))