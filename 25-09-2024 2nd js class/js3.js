setTimeout(() => {
    for(let i=0; i<1; i++){
        console.log('second');
        console.log('i love node js')
    }
}, 1000);

console.log('third')
const fs=require('fs')
fs.readFile('./index.html','utf-8',(err,data)=>{
    console.log(data)
})

console.log('last')