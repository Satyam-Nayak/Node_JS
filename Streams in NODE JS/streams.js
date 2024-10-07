//?Streams in Node JS ?










// Types of Steram
// 1. Readable Stream?
// 2. Writable Stream
// 3. Duplex Stream




const { error } = require('console')
const fs = require('fs')
let readData= fs.createReadStream('./streams1.js')
readData.on('data',data=>{
    console.log(data)
})

// console.log(readData)

//!Events:
// data 
// end 
// error
// close