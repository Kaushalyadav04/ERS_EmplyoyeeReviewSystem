// quality of Work
// work consistency 
// communication
// group work 
// productivity
// creativity 
// honesty
// integrity
// punctuality
// tchnical skills
// user
const mongoose=require('mongoose');

const reviewSchema=new mongoose.Schema({
    cooperation:{
        type:Number,
        required:true
    },
    workQuality:{
        type:Number,
        required:true
    },
    workConsistency:{
        type:Number,
        required:true
    },
    communication:{
        type:Number,
        required:true
    },
    groupWork:{
        type:Number,
        required:true
    },
    productivity:{
        type:Number,
        required:true
    },
    creativity :{
        type:Number,
        required:true
    },
    honesty:{
        type:Number,
        required:true
    },
    integrity:{
        type:Number,
        required:true
    },
    punctuality:{
        type:Number,
        required:true
    },
    tchnicalSkills:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.objectId,
        required:true
    },
},{
    timestamps:true
})

const Review=mongoose.model("Review",reviewSchema);
module.exports=Review;