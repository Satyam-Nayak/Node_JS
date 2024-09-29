let add = (a, b) => a + b;
let sub = (a, b) => a - b;

let operations = {
    add,
    sub,
    multiply: (a, b) => a * b
};

module.exports = operations;
