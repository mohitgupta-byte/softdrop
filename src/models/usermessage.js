// for contact us section
const mongoose = require("mongoose"); 
const { stringify } = require('querystring')
const userschema = mongoose.Schema({
    name:{
      type:String,
      required:true 
    },
    email:{
      type:String,
      required:true   
    }, 
   phone:{
    type:Number,
    required:true 
  },
  message:{
    type:String,
    required:true  
  }
})
module.exports = mongoose.model("User", userschema);




