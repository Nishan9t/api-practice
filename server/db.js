const mongoose = require('mongoose');

const dbConnection = async()=>{
    uri=`mongodb+srv://nishant:${process.env.DBPASS}@cluster0.ka7kmq0.mongodb.net/?retryWrites=true&w=majority`

    try{
        mongoose.connect(uri,{useNewUrlParser:true});
        console.log("db connected");
    }
    catch (err){
        console.log("error occured: ",err.message);
    }
}
module.exports=dbConnection;