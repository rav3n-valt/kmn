
export function data_base()
{
    const { MongoClient } = require("mongodb");
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Food_court").then(()=>{console.log("DB connected")}).catch((err)=>{console.log("connection was unsuccessful"+ err)})


var db = mongoose.connection;
var data = {"roti":"20"}
data = JSON.parse(JSON.stringify(data));
db.collection("Orders").insertOne(data,(err,collection)=>{
    if(err)
    {
        throw err
    }
    console.log("data inserted");
})


}