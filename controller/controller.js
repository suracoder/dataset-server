const db=require("../models")
module.exports={
    //// insert traffic location update 
    insert_accident:async (req,res,next)=>{
        
     
  db.accident.create({
         ...req.body,
        }).then((data)=>{
            res.send({data:"accident registed"})

        }
    
        ).catch(error=>{
            res.send({error:error })
    },)
},
  getAccident:(req,res,next)=>{
    db.accident.findAll().then(data=>{
        res.send(data)
    }).catch(error=>{
        res.send(error)
    })
  }

}
