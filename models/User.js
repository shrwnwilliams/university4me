const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { 
        type: String, 
        required: true,
        unique: true 
    },
    username: {
        type: String,
        required: true,
        validate: [validators.notEmpty, 'username is empty']
    },
    password: {
        type: String,
        required: true,
        validate: [validators.notEmpty, 'password is empty']
    }
    
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;