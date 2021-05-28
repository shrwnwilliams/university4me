const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const userSchema = new Schema({
    id: { 
        type: String, 
        unique: true 
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    schools: {
        type: Array,
        required: false,
    }
  });

  // userSchema.pre('save', function (next) {
  //   var user = this;
  //   bcrypt.hash(user.password, 10, function (err, hash) {
  //     if (err) {
  //       return next(err); }
  //     user.password = hash;
  //     next();
  //   })
  // });

  // userSchema.statics.authenticate = function (username, password, callback) {
  //     console.log(username)
  //   User.findOne({ username: username })
  //   console.log(username)
  //     .exec(function (err, user) {
  //       if (err) {
  //         return callback(err)
  //       } else if (!user) {
  //         var err = new Error('User not found!');
  //         err.status = 401;
  //         return callback(err);
  //       } else {
  //       bcrypt.compare(password , user.password, function (err, result) {
  //         if (result === true) {
  //           return callback(null, user);
  //         } else {
  //           return callback('Wrong password!');
  //         }
  //       })
  //     }
  //     });
  // }
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;