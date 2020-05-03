const mongoose=require('mongoose');
const Schema=mongoose.Schema();

const MarioCharSchema=new mongoose.Schema({
    name:String,
    age:Number
});

const MarioChar=mongoose.model('mariochar',MarioCharSchema);
module.exports=MarioChar; 