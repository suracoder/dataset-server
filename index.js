const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const db = require("./models")
const accidnet_route=require("./router/accident_route")
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
app.use("/api",accidnet_route);
app.get("/",(req,res,next)=>{
    res.send("hello server ")
})
app.get("/drop", (req, res, next) => {
  db.sequelize.drop().then(async data => await res.send({data:"database droped"}))
})
   
app.get("/sync", (req, res, next) => {
  db.sequelize.sync({ force: true }).then(async data=>await res.send({data:"database sync successfuly"}))
})
app.listen(4000,()=>{
    console.log("app sever run on port 4000")
})