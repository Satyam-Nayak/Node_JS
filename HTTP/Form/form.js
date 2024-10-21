const fs = require('fs');
const http = require('http');  
const querystring = require('querystring');

const server = http.createServer((req, res) => {
        if(req.method==='POST'){
            let formUrlEncoded='application/x-www-form-urlencoded'
            if (req.headers['content-type'] && req.headers['content-type'] === formUrlEncoded) {
                let body = "";
                req.on('data',chunk=>{
                    body+=chunk.toString();
                })

                req.on('end',()=>{
                    let payload = querystring.parse(body);
                    console.log(payload)
                    let name = payload.name || 'N/A';
                    let email = payload.email || 'N/A';
                    let password = payload.password || 'N/A';
                    
                    fs.appendFile('./form.text',`name=${name},email=${email},password=${password}\n` ,err=>{
                            if(err){
                                res.writeHead(500,{ 'Content-Type': 'text/plain' })
                                res.end(`<h1>Internal Server Error`)
                                console.log(err)
                            }else{
                                res.writeHead(200,{ 'Content-Type': 'text/plain' })
                                res.end(`<h1>Successfully subbmitted`)
                            }
                    });
                });
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
