// var fs = require('fs')

// // fs.writeFile("myfile.json",'{"test":"val"}',function(err){
// //     if(err) throw err;
// //     console.log("file saved");
// // });

// // fs.open("mytestfile.txt","w",function (err,file) {
// //    if (err) {
// //     throw err;
// //    } 
// //    console.log("opened");
// // });

// fs.appendFile("mytest.txt","Hello There!",function (err,file) {
//     if (err) {
//      throw err;
//     } 
//     console.log("writted");
//  });

var http = require('http')
var fs = require('fs')
// http.createServer(function(req,resp)
// {
//     fs.readFile('index.html',function(err,data)
//     {
//         resp.writeHead(200,{'content-type':'text/html'});
//         // resp.write(data);
//         // return resp.end();
        
//         //get url
//         resp.write(req.url);
//         resp.end();
//     })
// }).listen(6060,function () {
//     console.log("server is running");
// });

// const url = require('url')
// const myUrl = "https://hj.com/mysite/index.jsp?y=2023&m=3";

// let myU = url.parse(myUrl);
// console.log(myU.host);
// console.log(myU.pathname);
// console.log(myU.protocol);
// console.log(myU.search);
// console.log(myU.query);

// const url = require('url')
// // const myUrl = "https://hj.com/index.html";

// // let urlPath = url.parse(myUrl)

// http.createServer(function(req,resp)
// {
//     let query = url.parse(req.url,true);
//     let filenm = '.'+query.pathname+'.html';
    
//     fs.readFile(filenm,function(err,data){
//         if(err)
//         {
//             // throw err;
//             resp.writeHead(404,{'content-type':'text/html'});
//             return resp.end('file not found');
//         }
//         resp.writeHead(200,{'content-type':'text/html'});
//         resp.write(data);
//         return resp.end();
//     });
// }).listen(6060,function () {
//     console.log("server is running");
// });

const dt = require('./usermodule')

console.log(dt.curDate());