const checkrole=async(req,res,next)=>{
    console.log("Check Role");
    let role=req.user.id.role;
    if(!role.includes('Super_Admin')){
        return res.status(403).json({msg:"Access Denied Not Super Admin"});
    }
    next();
}

module.exports={checkrole}