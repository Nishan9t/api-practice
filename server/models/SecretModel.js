const mongoose = require('mongoose');

const secretSchema=mongoose.Schema({
    text:{
        type:String
    }
});

const secretModel=mongoose.model('secret',secretSchema);
module.exports=secretModel;