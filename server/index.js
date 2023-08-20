const express = require('express');
const cors=require('cors');
require('dotenv').config();
const dbConnection=require('./db.js')




const app=express();
app.use(cors());
app.use(express.json());


dbConnection();

app.listen(8000,()=>{
    console.log("server is running on 8000");
})