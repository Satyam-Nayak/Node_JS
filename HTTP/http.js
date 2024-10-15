//? HTTP:
// Hyper text transfer protocol
// it is a protocol that allows you to communicate between a server and a client.
// It is a stateless protocol.
// Stateless means that the server treats every request as a new  request i.e , It will not store the previous request in memory.
// Http is a built in module.
// it means no need to install it separately.
// Simply we can import it and we can use it.
// it is used to create a server in nodejs

const http = require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'}) //to download the text in notepad
    res.end('hello mg bruttish')
})

server.listen(5000,err=>{
    if(err) throw err;
    console.log("server is running in 5000")
})