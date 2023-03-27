const express = require('express')
const app = express()
const port = 5000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

// app.route('/').get((req,resp)=>{
//     resp.send("welcome to get function")
// }).post((req,resp)=>{
//     resp.send("welcome to post function")
// }).put((req,resp)=>{
//     resp.send("welcome to put function")
// }).delete((req,resp) => {
//     resp.send("welcome to delete function")
// });

// app.route('*').all((req,resp,next)=>{
//     console.log("Accessing invalid section....");
//     resp.status(404)
//     resp.send('invalid page')
// });

// app.get('/ab?cd', (req, res) => {
//     res.send('ab?cd')
// });
// app.get('/functions?', (req, res) => {
//     res.send('functions?')
// });
// app.get('/ab+cd', (req, res) => {
//     res.send('ab+cd')
// });
// app.get('/ab*cd', (req, res) => {
//     res.send('ab*cd')
// });
// app.get('/ab(cd)+e', (req, res) => {
//     res.send('ab(cd)+e')
// });
// // app.get(/a/, (req, res) => {
// //     res.send('/a/')
// // });
// app.get(/.*fly$/, (req, res) => {
//     res.send('/.*fly$/')
// });

// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
// });

// app.get('/example/a', (req, res) => {
//     res.send('Hello from A!')
// });
// app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
// }, (req, res, next) => {
//     console.log("from b");
//     // res.send('Hello from B!')
//     next()
// }, (req, res) => {
//     console.log("from c");
//     res.send('Hello from C!')
// });

// const cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
// }

// const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }

// const cb2 = function (req, res,next) {
//     console.log('CB2')
//     // res.send('Hello from C!')

//     if(req.params.id == "abc")
//         next()
//     else
//         res.send("invalid")
// }

// app.get('/example/:id', [cb0, cb1, cb2],(req,resp,next) => {
//     resp.send('Hello from c!')
// });

const route = require('./router')
app.use(route)