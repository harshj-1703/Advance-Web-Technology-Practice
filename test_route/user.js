const express = require('express')
const userrouter = express.Router();

userrouter.get('/',(req,res)=>{
    res.send("User default route")
})
userrouter.get('/add',(req,res)=>{
    res.send("User add route")
})

module.exports = userrouter;