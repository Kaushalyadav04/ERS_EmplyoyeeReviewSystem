const express=require("express");
const router=express.Router();
const userController=require("../controller/userController")



router.get("/",function(req,res){
    return res.render("home");
})


router.get("/signup",userController.signup)
router.post("/createUser",userController.createUser)
router.post("/signup",userController.signup)



module.exports=router