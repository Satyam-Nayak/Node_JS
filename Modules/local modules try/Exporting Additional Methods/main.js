const local = require('./module_exports');

// Accessing methods via the `local` object
console.log(local.add(100, 50));   // Output: 150
console.log(local.sub(100, 50));   // Output: 50
console.log(local.divide(100, 50)); // Output: 2

// Destructuring example
const { add, sub, divide } = require('./module_exports');

console.log(add(100, 50));   // Output: 150
console.log(sub(100, 50));   // Output: 50
console.log(divide(100, 0)); // Output: Cannot divide by zero
