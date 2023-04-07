const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    role:{
        type:String,
       default:"Employee",
        enum:["Admin","Employee"]
    }
    
},{
    timestamps:true
})

const User=mongoose.model("User",userSchema);

module.exports=User;