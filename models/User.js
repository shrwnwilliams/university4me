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
    }
    
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;