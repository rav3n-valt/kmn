const express=require('express');
const Item=require('./models/itemModel');
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Food_court").then(()=>{console.log("DB connected")}).catch((err)=>{console.log("connection was unsuccessful"+ err)})
var db = mongoose.connection;
const cors = require('cors')

const app=express();

// const db=require("./db");
const itemModel = require('./models/itemModel');

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server is working in " +port);
});

app.get("/getitems",(req,res)=>{
    Item.find({},(err,docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs)
        }

    })

});

app.post("/setitems",(req,res)=>{
    console.log(req.body)
    db.collection("Orders").insertOne(req.body,(err,collection)=>{
        if(err)
        {
            throw err
        }
        console.log("data inserted");
    })
    res.status(200).json({
        success:true,
      })
});




const port =process.env.PORT || 1000;

app.listen(port,()=> "Server running on port");