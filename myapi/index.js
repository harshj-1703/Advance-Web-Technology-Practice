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

app.get("/simpleinterest",function (req,resp) {
    const p = req.query.p;
    const r = req.query.r;
    const n = req.query.n;
    resp.send("I = "+((parseFloat(p)*parseFloat(r)*parseFloat(n))/100));
})

app.listen(port,() => {
    console.log(`server is up on ${port}`);
})