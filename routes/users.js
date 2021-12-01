 
 const express = require('express')
 const Router = express.Router()
 const Post = require('../models/user')
  
 
 // post request to database
 Router.post('/contact',async (req,res)=>{
    const post = new Post({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        DOB:req.body.message
    })
    try{
    const savedPost= await post.save()
    req.json(savedPost)
    }catch(err){
        res.json({ message : err} )

    }
})


module.exports= Router