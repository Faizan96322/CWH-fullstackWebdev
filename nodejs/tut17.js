const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync("./practice10.html" , "utf-8")

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    res.end(fileContent)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("listenig on port 8000");
})




