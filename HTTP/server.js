const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./data.htm', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    })
})

server.listen(5000,err => {
    if (err) throw err;
    console.log('Server is running on http://localhost:5000 in the port ');
})



// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     fs.readFile('./data.htm', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             console.log(data)
//             res.end(data);
//         }
//     });
// });

// server.listen(5000, () => {
//     console.log('Server is running on http://localhost:5000');
// });
