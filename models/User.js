const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");


const userSchema = new Schema({
    id: { 
        type: String, 
        // unique: true 
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    schools: [{
        name: {
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
        }],
    act: [{
        math: {
            type: Number,
            required: true
        },
        english: {
            type: Number,
            required: true
        },
        writing: {
            type: Number,
            required: true
        },
        cumulative: {
            type: Number,
            required: true
        },

    }],
    sat: [{
        math: {
            type: Number,
            required: true
        },
        english: {
            type: Number,
            required: true
        },
        writing: {
            type: Number,
            required: true
        },
    }]
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;