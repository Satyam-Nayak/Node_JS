const fs = require('fs')

//? create a folder named "controller"
// fs.mkdirSync('controller')
// console.log("controller folder created")

//create a controller.js file inside the controller folder
// fs.writeFileSync('./controller/controller.js',"node")
// console.log("controller.js file created")

// crate a views folder inside the controler folder
// fs.mkdirSync('./controller/views')
// console.log("views folder created")

//inside views create a views.js file
// fs.writeFileSync('./controller/views/views.js',"node")
// console.log("views.js file created")

//create a model folder inside the views folder
// fs.mkdirSync('./controller/views/model')
// console.log("model folder created")

//create a model.js file in side the model folder
// fs.writeFileSync('./controller/views/model/model.js',"node")
// console.log("model.js file created")

//create a node folder inside the model folder
// fs.mkdirSync('./controller/views/model/node')
// console.log("model folder created")

//create a node.js file in side the node folder
// fs.writeFileSync('./controller/views/model/node/node.js',"node")
// console.log("node.js file created")

// create a data1.txt file inside the node folder
// fs.writeFileSync('./controller/views/model/node/data1.txt',"node")
// console.log("data1.txt file created")

//inside the data1.txt file write the given informations
fs.writeFileSync('./controller/views/model/node/data1.txt', "Node.js is an Source server environment. Node.js allows you to run javascript on the server. Start learning Node.js now")
console.log("task done in data1.txt")

