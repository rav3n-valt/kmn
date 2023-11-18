const mongoose=require("mongoose");

var mongoURL="mongodb+srv://Aryan:foodcourt@cluster0.mjsswod.mongodb.net/mern-foodcourt"

mongoose.connect(mongoURL,{useunifiedTopology:true,useNewUrlParser:true})

var db= mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB connection Successful');
})

db.on('error', ()=>{
    console.log('Mongo DB connection Failed');
})

module.exports=mongoose