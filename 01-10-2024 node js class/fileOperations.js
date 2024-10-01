const fs = require('fs');

// Reading data from 'node.txt' if it exists
if (fs.existsSync('./node.txt')) {
    let data = fs.readFileSync('./node.txt', 'utf-8');
    console.log(data);
} else {
    console.log("'node.txt' not found");
}

// Writing to 'node1.txt'
fs.writeFileSync('./node1.txt', "I am a text file");
console.log("'node1.txt' created and written to");

// Appending to 'node2.txt'
fs.appendFileSync('./node2.txt', "We are feeling sleepy \n");
console.log("'node2.txt' appended with new content");

// Appending content of 'node.txt' to 'nodejs.txt' if 'node.txt' exists
if (fs.existsSync('./node.txt')) {
    let data1 = fs.readFileSync('./node.txt', 'utf-8');
    fs.appendFileSync('./nodejs.txt', data1);
    console.log("'node.txt' content appended to 'nodejs.txt'");
} else {
    console.log("'node.txt' not found, skipping append to 'nodejs.txt'");
}

// Deleting the correct file 'nodejs.txt' if it exists
if (fs.existsSync('./nodejs.txt')) {
    fs.unlinkSync('./nodejs.txt');
    console.log("file 'nodejs.txt' deleted");
} else {
    console.log("'nodejs.txt' not found, cannot delete");
}

// Renaming file 'nodejs.txt' to 'Express.js' if it exists (but it was deleted above)
if (fs.existsSync('./nodejs.txt')) {
    fs.renameSync('./nodejs.txt', 'Express.js');
    console.log("file renamed to 'Express.js'");
} else {
    console.log("'nodejs.txt' not found, cannot rename");
}

// Creating folder 'nodejs' if it does not exist
if (!fs.existsSync('./nodejs')) {
    fs.mkdirSync('./nodejs');
    console.log("folder 'nodejs' created");
} else {
    console.log("folder 'nodejs' already exists");
}

// Creating folder 'node_2pm' inside 'nodejs' if it does not exist
if (!fs.existsSync('./nodejs/node_2pm')) {
    fs.mkdirSync('./nodejs/node_2pm');
    console.log("folder 'node_2pm' created inside 'nodejs'");
} else {
    console.log("folder 'node_2pm' already exists inside 'nodejs'");
}

// Writing to file 'node.js' inside 'nodejs'
fs.writeFileSync('./nodejs/node.js', "node");
console.log("file 'node.js' created inside 'nodejs'");

// Deleting folder 'nodejs' if it exists (first, delete any files inside)
if (fs.existsSync('./nodejs/node.js')) {
    fs.unlinkSync('./nodejs/node.js'); // Remove the file inside the folder
    console.log("file 'node.js' deleted inside 'nodejs'");
}

if (fs.existsSync('./nodejs/node_2pm')) {
    fs.rmdirSync('./nodejs/node_2pm'); // Remove the subfolder
    console.log("folder 'node_2pm' deleted inside 'nodejs'");
}

if (fs.existsSync('./nodejs')) {
    fs.rmdirSync('./nodejs'); // Now remove the main folder
    console.log("folder 'nodejs' deleted");
} else {
    console.log("'nodejs' folder not found, cannot delete");
}
