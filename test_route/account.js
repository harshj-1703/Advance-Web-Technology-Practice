const express = require('express')
const accountrouter = express.Router();

accountrouter.get('/',(req,res)=>{
    res.send("Account default route")
})
accountrouter.get('/add',(req,res)=>{
    res.send("Account add route")
})

module.exports = accountrouter;