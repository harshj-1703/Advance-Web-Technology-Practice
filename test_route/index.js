const express = require('express')
const app = express()
const port = 5000;
app.get('/',(req,resp)=>{
    resp.send("welcome to get function")
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});