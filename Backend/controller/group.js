const Group = require("../model/group");

const createGroup=async(req,res)=>{
    const {name,admin}=req.body;
    console.log(name, admin);
    // res.status(200).json({msg:"Create Group"});
    try{
    let createGroup= await Group.create({
        name,
        admin
    });
    res.status(200).json({msg:createGroup});
}catch(e){
    console.error(e);
    res.status(401).json({Error:e});
}
}

module.exports={createGroup};