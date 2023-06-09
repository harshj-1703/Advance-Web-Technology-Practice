const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const filePath = 'useraccounts.json'
//create server
const app = express()
//port number
const port = 2400;
//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/account/list",(req,res)=>{
    const accounts = getAccountDetails();
    res.send(accounts);
})

app.post("/account/add",(req,res)=>{
    const accounts = getAccountDetails()
    const newAccId = Math.floor(100000 + Math.random() * 20000)
    accounts[newAccId] = req.body
    console.log(accounts);
    saveAccountDetails(accounts)
    res.send({success:true, msg:'new account added!!!'});
});

app.put("/account/:id",(req,res)=>{
    const accounts = getAccountDetails()
    const id = req.params['id']
    console.log(id);
    accounts[id] = req.body;
    saveAccountDetails(accounts)
    res.send({success:true, msg:`account with ${id} updated`})
});

app.delete("/account/:id",(req,resp)=>{
    const accounts = getAccountDetails()
    const id = req.params['id']
    console.log(id);
    delete accounts[id];
    saveAccountDetails(accounts);
    resp.send({success:true, msg:`account with ${id} deleted`})
})

//start server
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
});

//functions
const getAccountDetails = ()=>{
    const data = fs.readFileSync(filePath)
    return JSON.parse(data);
}

const saveAccountDetails = (user) =>{
    const usr = JSON.stringify(user)
    fs.writeFileSync(filePath,usr,function(err){
        
    })
}