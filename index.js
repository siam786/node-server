// local module
const other = require('./local_module')

// core module
let http = require('http')

// third party module ---> unders
const underscore = require('underscore')

const server = http.createServer(function (req, res) {
  console.log(`server running`)
})

server.listen(7000)

const names = 'siam'
console.log(names)

var stooges = [
    { name: 'siam', age: 33 },
    { name: 'sajib', age: 14 },
    { name: 'sarmin', age: 20 }
];
const res=underscore.pluck(stooges,'age');

console.log(res);
