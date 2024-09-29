let add = (a, b) => {
    return a + b;
}

let sub = (a, b) => {
    return a - b;
}

let divide = (a, b) => {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

module.exports = { add, sub, divide };
