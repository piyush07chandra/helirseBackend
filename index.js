const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors'

const app=express();
app.use(cors());

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/heliverse', 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
     })}   
   main()
   const  db=mongoose.connection;
   db.on("error",console.error.bind(console, "connection error"));
   db.once("open",()=>{
    console.log("database connected")
    
   });

   let userSchema=new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    first_name:'string',
    last_name:"String",
    email:"String",
    gender:"String",
    avatar:"String",
    domain:"String",
    available:"String"
})
const User = mongoose.model('User', userSchema);
 
  app.get('/',async(req,res)=>{
    const  users = await User.find({}).exec();
    res.send(users)
  })

app.listen('3000',()=>{
    console.log('App is listening on port 3000');
});