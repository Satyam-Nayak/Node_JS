const http = require('http')
const mongodb = require('mongodb').MongoClient   // MongoClient is a class
const url = "mongodb://localhost:27017"

let connectDb = async() =>{
    let connection= await mongodb.connect(url)
    console.log("Database connect")
    let database = await connection.db('Node_2pm')
    console.log("database is created")
    let collection = await database.createCollection('Node_2pm')
    console.log("collection is created")

    // collection.insertOne({name:'Satyam',age:21,gender:'Male'})
    // console.log("data inserted")

    // collection.insertMany([
    //     {name:'Suman',age:30,gender:'female'},
    //     { name: 'SumanOp', age: 30, gender: 'Female' },
    //     { name: 'Raj', age: 28, gender: 'Male' },
    //     { name: 'Anita', age: 25, gender: 'Female' }])
    //     console.log("multiple data inserted data inserted")


    //======insert data from json fake user api
    // let data = await fetch('https://fakestoreapi.com/carts')
    // let json= await data.json()
    // collection.insertMany(json)


    // ---------to find the mode data from the mongodb
    // let finaldata = await collection.find().toArray();  
    //     console.log(finaldata); 


    //--- to fetch first data from the mongo db
    let onedata = await collection.findOne()
        console.log(onedata); 
            
}
connectDb()


// const server = http.createServer((req,res)=>{

// })


// server.listen(5000,err=>{
//     if(err) throw err;
//     console.log("server is running on 5000 port") 
// })