//?Streams in Node JS ?










// Types of Steram
// 1. Readable Stream?
// 2. Writable Stream
// 3. Duplex Stream



//////////===================================================
const fs = require('fs')
let readData= fs.createReadStream('./streams1.js','utf-8')
readData.on('data',data=>{
    console.log(data)
})

// console.log(readData)

//if we donot use utf-8 {( "let readData= fs.createReadStream('./streams1.js')" )}
//When reading from a file without specifying the encoding (like `utf-8`), 
//Node.js treats the data as raw binary, which is represented as a `Buffer` object. 
//Buffers store binary data and are not automatically 
//converted to strings unless an encoding like `utf-8` is provided to interpret the data as text.
//////////=================End=================



//!Events:
// data 
// end 
// error
// close