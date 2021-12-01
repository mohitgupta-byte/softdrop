// for newsleter subscription.

const mongoose = require("mongoose"); 
const { stringify } = require('querystring')
const userschema2 = mongoose.Schema({
    email:{
      type:String,
      required:true
    }
  })
  module.exports = mongoose.model("Newslet", userschema2);