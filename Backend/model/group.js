const mongoose=require('mongoose');

const groupSchemma= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
});

const Group= mongoose.model('Group',groupSchemma);
module.exports=Group