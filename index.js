const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const urlencoder=bodyparser.urlencoded({extended:true})
app.use(urlencoder);
app.use(bodyparser.json());
// app.use(morgan("combined"));
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Headers','*');
  if(req.method==='OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT','POST','GET');
    return res.status(200).json({});
  }
  next()
});
// app.use("/api",router);
app.get("/",(req,res,next)=>{
    res.send("hello server ")
})
app.listen(4000,()=>{
    console.log("app sever run on port 4000")
})