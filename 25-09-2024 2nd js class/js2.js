setTimeout(() => {
    for(let i=0; i<1; i++){
        console.log('second');
        console.log('i love node js')
    }
}, 1000);
const fs= require('fs') //use same module only //go with same module name also
console.log('fifth');
fs.readFile('./index.html',(err,data)=>{
    console.log(data)
})
console.log('first');