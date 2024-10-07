//! Buffer
//it is a class 
// It is used to store the data temporarily and transfer to other place
// Data is stored in binary format  
// Buffer is used to manipulate the binary data
// It includes videos, audios and images etc 



// 1. from
// syntax Buffer.from(value)
// const buf = Buffer.from('I Play  BGMI')
// console.log(buf.toString());
// console.log('Buffer Length : ' +buf.length);  // Buffer Length = Used to find the length

// //2. alloc(size,value)
// const buf1 = Buffer.alloc(30 , 'hello satyam nayak 26')
// console.log(buf1.toString());
// console.log('Buffer Length : ' +buf1.length);


// 3:ifBuffer():
// const buf = Buffer.alloc(11,'Hello world')
// const buf2 = "hello world"
// console.log(Buffer.isBuffer(buf2))


// 4:slice(startIndex,endIndex)
// const buf = Buffer.from('Satyam Hello Hii help me please')
// console.log(buf.slice(0,9).toString())

//5.length
// const buf6 = Buffer.from('HARAMI MANUSH')
// console.log(buf6.length);

