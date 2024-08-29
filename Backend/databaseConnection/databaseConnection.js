const mongoose= require('mongoose');
require('dotenv').config();
const URI=process.env.DATABASE_KEY;

const connectDatabase=async()=>{
    try{
        console.log("Database Connection");
    await mongoose.connect(URI);
    }catch(e){
        return{
        error:true,
        details:e            
        }
    }
}

module.exports={connectDatabase};