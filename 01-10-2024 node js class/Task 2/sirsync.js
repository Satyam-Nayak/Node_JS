//?FS: If we need to interact with files in our operating system then we will use fs modules.
// Import fs module
const fs=require('fs')
// console.log(fs)


//? File Operations
//! Read a file
// let data=fs.readFileSync('./node.txt','utf-8')
// console.log(data)
// console.log("first")


//! Write a file
// fs.writeFileSync('./node1.txt',"I am a text file")
// console.log("Write file is sucessful")


//! Append a file
// fs.appendFileSync('./node2.txt',"We are feeling sleepy \n")
// console.log("Data is appended")


//! Read and append data in a file
// let data1=fs.readFileSync('node.txt','utf-8')
// console.log(data1)
// console.log("Reading file is sucessful")
// fs.appendFileSync('./nodejs.txt',data1)
// console.log("Data is appended")


//!delete a file
// fs.unlinkSync('./node1.txt')
// console.log("File is deleted")


//?rename a file
// fs.renameSync('./node.txt','Express.js')
// console.log("File is renamed")


//?create a new folder
// fs.mkdirSync('./Express')
// console.log("folder created")


//?create a nested folder
// fs.mkdirSync('./Nodejs/node_2pm')
// console.log("folder created")

//?create file inside nested folder
// fs.writeFileSync('./Nodejs/node.js',"node")
// console.log("file created")

//?Remove folder  (it delet only if the folder does not contain any other files)
// fs.rmdirSync('./Express')
// console.log("folder deleted")

//?Rename folder
// fs.renameSync('./Nodejs','./Express')
// console.log("folder renamed")
