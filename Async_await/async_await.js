const fs = require('fs')
// console.log(fs)

let readfile=async()=>{
    let data = await fs.readFile('./data.json',(err,data)=>{
        console.log(JSON.parse(data))
    })
}
readfile()

// let writefile=async()=>{
//     await fs.writeFile('./writefile.js','Satyam Hello...',(err)=>{
//         if(err) throw err;
//         console.log("File written")
//     })
// }

// writefile()

