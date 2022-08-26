// local module
const other = require('./local_module')
const subtract = other.add(10,5)
console.log(subtract);

// core module of node

const http = require('http');
// console.log(http);

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<p>This is Home Page</p>');
        res.end()
    } else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':'application/json'});
        //res.write('<p>This is Contact Page</p>');
        res.end(JSON.stringify({course:"ACC"}))
    }else if(req.url=='/service'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<p>This is Service Page</p>');
        res.end()
    }
})

const port = 5002;
server.listen(port)
console.log(`Server is Running at ${port}`);



// third party module ---> unders
// const underscore = require('underscore')

// const server = http.createServer(function (req, res) {
//   console.log(`server running`)
// })

// server.listen(7000)

// const names = 'siam'
// console.log(names)

// var stooges = [
//     { name: 'siam', age: 33 },
//     { name: 'sajib', age: 14 },
//     { name: 'sarmin', age: 20 }
// ];
// const res=underscore.pluck(stooges,'age');

// console.log(res);
