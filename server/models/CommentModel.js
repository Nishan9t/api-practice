const mongoose=require('mongoose');

const commentSchema = mongoose.Schema({
    message:{
        type:String,
        required:true,
    },
    secretId:{
        type:String,
    },

});

const commentModel = mongoose.model("comment",commentSchema);
module.exports=commentModel;