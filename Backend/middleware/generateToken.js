const jwt= require('jsonwebtoken');
require('dotenv').config();
const generateToken=(id)=>{
    let token=jwt.sign({id},process.env.SECRET_KEY_TOKEN,{expiresIn:"1d"});
    return token;
}

module.exports={generateToken};