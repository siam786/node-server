const http = require('http')
const url = require('url')

const server = http.createServer((req,res) =>{
const address_url = 'https://localhost:5003/contact?name=siam&country=bd'

const parsed_url= url.parse(address_url,true)
const host = parsed_url.query
console.log(host);
})
// console.log(url);
const port = 5003;
server.listen(port)
console.log(`Server is running ${port}`);