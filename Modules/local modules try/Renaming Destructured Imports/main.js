// Destructuring and renaming the imported methods
const { add: sum, sub: difference } = require('./module_exports');

console.log(sum(5, 15));          // Output: 20
console.log(difference(20, 10));  // Output: 10
