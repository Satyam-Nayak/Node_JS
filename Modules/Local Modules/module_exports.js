let add = (a, b) => {
    return a + b;
}

let sub = (a, b) => {
    return a - b;
}

let mul = (a,b) =>{
    return a*b;
}

let div = (a,b) =>{
    return a/b;
}

// Exporting both add and sub functions as part of the module
module.exports = { add, sub ,mul, div};
