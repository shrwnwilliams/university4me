const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { 
        type: ObjectID, 
        required: true,
        unique: true 
    },
    username: {
        type: String,

    },
    password: {
        type: String,
        
    }
    
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;