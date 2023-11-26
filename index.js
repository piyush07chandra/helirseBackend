const express=require("express")
const mongoose=require('mongoose')
const app=express()

<<<<<<< HEAD
const main =async()=>{
    try {
        await mongoose.connect(`mongodb+srv://piyush:LzXIr0Z8D3Vje19c@web-ecomerce.3wphvcu.mongodb.net/?retryWrites=true&w=majority`, { 
         serverSelectionTimeoutMS: 5000 
     })
        console.log("database connected")
     }
     catch (error){
        console.log("error while connecting with the database",error.message);
     }
}
main()
=======
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors'


const app=express();
app.use(cors());
>>>>>>> 60cd5e266fc7126927df6b85415fb12b07ee2fe1


const PORT=process.env.PORT || 3000


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
const User = mongoose.model('workors',userSchema);

<<<<<<< HEAD
app.get('/',async(req,res)=>{
   
   try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
})
app.listen(PORT ,()=>console.log(`server is running on ${PORT}`))
=======
   
    
 
  app.get('/',async(req,res)=>{
      const users = await User.find({}).exec();
    res.send(users)
  })

app.listen('3000',()=>{
    console.log('app is listening on port 3000');
});
>>>>>>> 60cd5e266fc7126927df6b85415fb12b07ee2fe1
