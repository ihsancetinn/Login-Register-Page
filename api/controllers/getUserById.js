const User = require("../model/users");

const getUserById = (req,res)=>{

    const {userId} = req.params;

    if(userId.length===24){
    User.findById(userId).then((user)=>{
        if(!user){
            return res.json({message:"User bulunamadi"})
        } else {
            const { _id,password,...resto} = user._doc
            res.json(resto);
        }
    });
}
else{
    res.json({message:"Parola Hatali"})
}

};


module.exports = getUserById;