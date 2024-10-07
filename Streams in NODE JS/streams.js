//?Streams in Node JS ?
const fs = require('fs')







//! 1. Readable Stream: 
//! 2. Writeable Stream: These are the streams which are used to write the data to the files and network i/o connections
//! 3. Duplex Stream: These are the streams which are used to read and write the 

// Types of Steram
// 1. Readable Stream?
// 2. Writable Stream
// 3. Duplex Stream



//////////====================Start===============================
// const fs = require('fs')
// let readData= fs.createReadStream('./streams1.js','utf-8')
// readData.on('data',data=>{
//         console.log("Data reading started")
//     console.log(data)
// })

// console.log(readData) {not needed}

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

// readData.on('end',_=>{
//     console.log("Reading is finished")
// })

// readData.on('error',err=>{
//     console.log(err)
// })

// readData.on('close',_=>{
//     console.log("All event are closed")
// })



//! writeable Stream
let writeData = fs.createWriteStream('writestream.txt')
writeData.write("Streams are collection of data like ")