const express = require('express');
const cors=require('cors');
require('dotenv').config();
const dbConnection=require('./db.js')
const route=require('./Routes/userRoute.js');
const cookieParser = require('cookie-parser');



const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())


dbConnection();


//using routes
app.use('/',route)

app.listen(8000,()=>{
    console.log("server is running on 8000");
})