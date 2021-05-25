const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const userSchema = new Schema({
    userid: { 
        type: String, 
        required: true,
        unique: true 
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

  userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
        return next(err); }
      user.password = hash;
      next();
    })
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;