// kaushalyadav723
// JgF2fzvyJmPRoczg
// mongodb+srv://kaushalyadav723:<password>@cluster0.lyn9nui.mongodb.net/?retryWrites=true&w=majority

const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://kaushalyadav723:JgF2fzvyJmPRoczg@cluster0.lyn9nui.mongodb.net/Employee_review_system?retryWrites=true")
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('Connection with database is successfull');
})
module.exports=db;