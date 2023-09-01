const express = require('express')

const app = express()
const fs = require('fs')
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.get('/users', function (req, res) {
    res.send('<h1>Hello World</h1>')
})
app.post('/users', function (req, res) {
    res.send('Hello World of post')
})
app.post('/contact', function (req, res) {
    res.json(req.body.email)
    // console.log(req.body);
})

app.post('/post', function (req, res) {
    res.json(req.body)
    console.log(req.body);
})
let products = [
    {name : 'Cloth', price : '5000'},
    {name : 'Shoe', price : '100'},
    {name : 'Watch', price : '25000'},
    {name : 'Soth', price : '5000'},
]
app.get('/products', (rep, res)=>{
    // res.json(products)
    fs.readFile('index.html', function (err, data) {
        res.end(data)
    })
})

let port = 5000
app.listen(port, function () {
    console.log('port is running on port '+ port)
})