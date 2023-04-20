const User=require("../models/userSchema")

module.exports.signup=function(req,res){
    res.render("signup");
}






module.exports.createUser=async function(req,res){
        console.log(req.body)
        let user=await User.find({email:req.body.email});

        if(user.length>0){
            // it means usre is already present
            console.log('user',user);
            return res.render('userAlreadyExist',{
                user:user[0]
            });
        }else{
            if(req.body.password!==req.body.confirmPassword){
                return res.end('<h1>Password and Confirm Password do not match</h1>')
            }
            let newUser=await User.create({
                email:req.body.email,
                name:req.body.name,
                password:req.body.password,
                gender:req.body.gender,
                role:req.body.role

            });
            return res.render('welcome',{
                user:newUser
            });
        }
}


module.exports.signin=async function(req,res){
    let user=await User.find({
        email:req.body.email
    });
    let allUser=await User.find({})
    console.log(allUser,"***alluser**")
    if(user.length>0){
        if(user[0].password!=req.body.password){
            console.log("you have entered wrong password");

            return res.render('wrongPassword');
        }
        
        console.log("successfully logged in")
        return res.render('welcome',{
            user:user[0],
            allUser:allUser
        })
    }else{
        // console.log('User not present');
        return res.render('signin');
    }

}