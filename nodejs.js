const http = require('http')
const fs = require('fs')
const { json } = require('stream/consumers')
const server = http.createServer((req, res)=>{
    // req is for the request that is top be sent to the server while res is for result
    // console.log("Hello World!");
    // console.log(req.method);

    
    // console.log(req.url);
    // $path = ''
    // if (req.url === '/') {
    //     path = 'index.html'
    //     res.end('hello SQI')
    // }
    // if (req.url === '/about') {
    //     path = 'about.html'
    //     //  res.end({})
    // }
    if (req.url === '/users') {
        const user = [{name:'oslim', email:'oslim@gmail.com'}]
        const userJson = JSON.stringify(user)
        res.end(userJson)
    }
        // res.setHeader({'Content-Type':'text/html'})
        // res.write('hello SQI')
        // res.end()
        // fs.readFile(path, function (err, data) {
        //    if (err) {
        //         console.log(err);
        //    }else{

        //     res.end(data)
        //    }
        // }
        // )
    
})
let port = 5000
server.listen(port, 'localhost', function () {
    
    // console.log("Hello World!");
})

