const express = require('express');
const cors=require('cors');
require('dotenv').config();
const dbConnection=require('./db.js')
const route=require('./Routes/userRoute.js')



const app=express();
app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials:true,
}));
app.use(express.json());


dbConnection();


//using routes
app.use('/api',route)

app.listen(8000,()=>{
    console.log("server is running on 8000");
})