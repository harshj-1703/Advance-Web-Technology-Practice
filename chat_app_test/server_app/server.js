const express = require('express');
const app = express();
const http = require('http');
const { Socket } = require('socket.io');
const server = http.createServer(app);
const io = require('socket.io')(server);

const port = 5000

app.get('/', (req, res) =>{
    res.send("server is running");
})

//io events
io.on('connection',(socket)=>{
    console.log("new connection");
    socket.on('desconnected',()=>{
        console.log("user disconnected");
    });
})

server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});