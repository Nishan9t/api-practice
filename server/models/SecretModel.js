const mongoose = require('mongoose');

const secretSchema=mongoose.Schema({
    message:{
        type:String
    }
});

const secretModel=mongoose.model('secret',secretSchema);
module.exports=secretModel;