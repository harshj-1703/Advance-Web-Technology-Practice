const express = require('express')
const app = express()
const port = 5000

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const dbConf = require('./app/config/db.config')

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(dbConf.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection done with database');
}).catch((err)=>{
    console.log("error in db connection ",err);
    process.exit()
})

const blogRouter = require('./app/routes/blog.routes')

app.use('/api/blog',blogRouter)
app.get('/',(req,res) => {
    console.log("Welcome to server");
    res.send({message:"welcome to server"})
})

//create server on port
app.listen(port,()=>{
    console.log(`server is started on port ${port}`);
});

