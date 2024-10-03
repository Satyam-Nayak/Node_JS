const fs = require("fs")
// console.log(fs)


//Sync way
// let data1=fs.readFileSync('./note.txt','utf-8')
// console.log(data1)



//! Read a file aysnc manner
// let data=fs.readFile('./note.txt','utf-8',(err,data)=>{
//     if(err)
//         throw err;
//      console.log(data);
// })


//?create file inside nested folder
// fs.writeFileSync('./node.txt',"node")
// console.log("file created")

//write  a file using async 
// let data1 = fs.writeFile('./no.txt', 'node', (err,data1) => {
//     if(err)
//         throw err;
//     console.log(data1)
//      console.log("file created ");
// })


// append a file 
fs.appendFile('./node.txt', ' - Appended text', (err) => {
    if (err)
        throw err;
    console.log('File has been updated with appended content.');
});
// delete a file 
// rename a file
