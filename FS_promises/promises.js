const { create } = require('domain')
const fs = require('fs/promises')

// fs.readFile('./promises.txt','utf-8')
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})

// fs.writeFile('./AC_NOT_Working','we are feeling too cold today........')
// .then((_)=>{console.log("File is created and written")})
// .catch((err)=> {console.log(err)})

// ======task===
// read n write file
// fs.readFile('./promises.txt', 'utf-8')
//   .then((data) => {
//     console.log(data);  // Log the content of the file
//   })
//   .catch((err) => {
//     console.log(err);  // Log any errors if the file read fails
//   });

// rename a file
// fs.rename('./note.txt', 'Satyam.txt')
// .then((data)=>{
//     console.log("file rename susscesful");
// })
// .catch((err)=>{
//     console.log(err);
// });


// delete a file
// fs.unlink('./s1.txt')
// .then((_)=>{
//     console.log("s1.txt file deteled");
// })
// .catch((err)=>{
//     console.log(err);
// })


// change file extension
// fs.rename('./sam.txt','./sam.js')
// .then((_)=>{
//     console.log("sam.txt file rename to sam.js file");
// })
// .catch((err)=>{
//     console.log(err);
// })

// create a Folder 
// fs.mkdir('./Satyam')
// .then((_)=>{
//     console.log("Folder created");
// })
// .catch((err)=>{
//     console.log(err);
// })


// create a nested Folder
// fs.mkdir('./Satyam/Sonu')
// .then((_)=>{
//     console.log("nested folder created");
// })
// .catch((err)=>{
//     console.log(err);
// })

// create file inside a Folder
// fs.writeFile('./Satyam/Sonu/sam.txt', 'Hii am file inside the sonu folder which also inside the satyam folder')
// .then((_)=>{
//     console.log("file created");
// })
// .catch((err)=>{
//     console.log(err);
// })

// rename folder
// fs.rename('./Satyam/Sonu/sam.txt','./Satyam/Sonu/som.txt')
// .then((_)=>{
//     console.log("sam.txt file rename to som.txt file");
// })
// .catch((err)=>{
//     console.log(err);
// })


// delete folder
fs.unlink('./Satyam26/Sonu/som.txt')
.then((_)=>{
    console.log("som.txt file deleted");
    fs.rmdir('./Satyam26/Sonu')
    .then((_)=>{
        console.log("folder deleted");
        fs.rmdir('./Satyam26')
        .then((_)=>{
            console.log("Satyam folder deleted");
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((err)=>{
    console.log(err);
})

