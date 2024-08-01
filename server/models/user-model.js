const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  pincode: {
    type: Number,
    require: true,
  },

});


const User = new mongoose.model("User",userSchema)

module.exports=User