const router=require("express").Router()
const accident_controller=require("../controller/controller")
router.post("/insertAccident",accident_controller.insert_accident);
router.get("/getAccident",accident_controller.getAccident);
module.exports=router