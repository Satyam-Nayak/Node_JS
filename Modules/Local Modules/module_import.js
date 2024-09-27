const local = require('./module_exports');

// This will work correctly if you call local.add() and local.sub()
console.log(local.add(100, 300));  // Output: 400
console.log(local.sub(100, 300));  // Output: -200
console.log(local.mul(100, 300));  
console.log(local.div(100, 300));  

console.log("===================");
// Destructuring the add and sub functions correctly
const { add, sub,mul,div } = require('./module_exports');
console.log(add(100, 300));  // Output: 400
console.log(sub(100, 300));  // Output: -200
console.log(mul(100, 300));  
console.log(div(100, 300));  
