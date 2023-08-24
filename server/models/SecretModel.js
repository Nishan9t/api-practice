const mongoose = require('mongoose');

const secretSchema=mongoose.Schema({
    text:{
        type:String,
        required:true,
    }
});

const secretModel=mongoose.model('secret',secretSchema);
module.exports=secretModel;