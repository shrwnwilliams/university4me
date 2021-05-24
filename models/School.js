const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    id: { 
        type: String, 
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
  
  const School = mongoose.model("School", schoolSchema);
  
  module.exports = School;