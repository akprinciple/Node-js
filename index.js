const express = require('express')

const app = express()
const fs = require('fs')
const cors = require("cors")
const connectDb = require('./connect/connection')
const blog = require('./model/blog')
const product = require('./model/product')
const userRoute = require('./routes/userRoute')
app.use(cors())
app.use(express.json())

app.use('/user', userRoute)


let port = 5000

const start = ()=>{
    try{
        connectDb();
        console.log('Database Successfully Connected'); 
        app.listen(port, function () {
    console.log('port is running on port '+ port)
})
    }catch(error){
        console.log(err);

    }

}
start() 
