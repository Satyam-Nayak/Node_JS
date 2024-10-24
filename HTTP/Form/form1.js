const fs = require('fs');
const http = require('http');  
const querystring = require('querystring');
const mongodb = require('mongodb').MongoClient   // MongoClient is a class
const url = "mongodb://localhost:27017"

const server = http.createServer((req, res) => {
        if(req.method==='POST'){
            let formUrlEncoded='application/x-www-form-urlencoded'
            if (req.headers['content-type'] && req.headers['content-type'] === formUrlEncoded) {
                let body = "";
                req.on('data',chunk=>{
                    body+=chunk.toString();
                })

                req.on('end',()=>{
                    console.log(body)
                    let payload = querystring.parse(body);
                    let connectDb = async()=>{
                        let connection = await mongodb.connect(url)
                        let database = await connection.db('Node_2pm')
                        let collection = await database.createCollection('Node_2pm')
                        collection.insertOne(payload)
                    res.writeHead(200,{ 'Content-Type': 'text/html' })
                    res.end(`<h1>Successfully subbmitted`)
                            }
                            connectDb()
                    })
                }else{
                    res.writeHead(400,{'Content-Type': 'text/html' })
                    res.end(`<h1> Bad Request `)
                }
            
        }else {
            if (req.url === '/' || req.url === '/home') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let form = fs.createReadStream('./form.html');
            form.pipe(res);
        } else if (req.url === '/home') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let form = fs.createReadStream('./form.html');
            form.pipe(res);
        } else if (req.url === '/css') {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            let form = fs.createReadStream('./form.css');
            form.pipe(res);
        }
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000/');
});
