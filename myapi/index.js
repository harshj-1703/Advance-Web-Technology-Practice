const express = require('express')
const app = express()

const port = 2000

app.get("/",function (req,resp) {
    resp.send('this is test from dashboard');
})

app.get("/greetings",function (req,resp) {
    resp.send('hello bro! greetings to u');
})

app.get("/sum",function (req,resp) {
    const a = req.query.a;
    const b = req.query.b;
    resp.send("sum is : "+(parseFloat(a)+parseFloat(b)));
})

app.listen(port,() => {
    console.log(`server is up on ${port}`);
})