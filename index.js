const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')


const app=express();
app.use(cors());

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/heliverse')}   
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
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
  })

app.listen('3000',()=>{
    console.log('App is listening on port 3000');
});