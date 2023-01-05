const bcrypt = require("bcrypt");
const User = require("../model/users");

const login = (req,res)=>{
 const {email,password} = req.body;


 User.findOne({email}).then((user)=>{
    if(!user){
      return  res.send("Kullanıcı Bulunamadı")
    }
    bcrypt.compare(password,user.password ).then((userr)=>{
        if(userr){
            const {id,name} = user;
           res.json({message:"Parola dogru", user: {
            id,name,
           },});
        } else {
            return res.json({message:"parola hatalı"})
        }
    })
 })

}

module.exports = login;