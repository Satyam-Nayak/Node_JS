const { create } = require('domain')
const fs = require('fs/promises')
const { fileFromPath } = require('openai/_shims/fileFromPath.node')

// fs.readFile('./promises.txt','utf-8')
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})

// fs.writeFile('./AC_NOT_Working','we are feeling too cold today........')
// .then((_)=>{console.log("File is created and written")})
// .catch((err)=> {console.log(err)})

// ======task===
// read n write file
// rename a file
// delete a file
// change file extension

// create a Folder 
// create a nested Folder
// create file inside a Folder
// rename folder 
// delete folder 