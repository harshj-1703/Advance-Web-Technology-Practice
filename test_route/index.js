const express = require('express')
const app = express()
const port = 5000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
app.route('/').get((req,resp)=>{
    resp.send("welcome to get function")
}).post((req,resp)=>{
    resp.send("welcome to post function")
}).put((req,resp)=>{
    resp.send("welcome to put function")
}).delete((req,resp) => {
    resp.send("welcome to delete function")
});