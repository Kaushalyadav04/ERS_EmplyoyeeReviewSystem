const express=require("express");
const app=express();
const port=8001;

app.set("view engine","ejs");
app.set("views","./views")


app.use(express.static("assets"))
app.use("/",require("./routes"));



app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("port is successfully running",port);
    
})