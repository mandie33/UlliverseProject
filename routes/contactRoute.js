const router =require('express').Router();
const contactController=require("../controllers/contactController");
const {body,check, validationResult}=require("express-validator")

router.post("/contact",contactController.postMessage)

module.exports=router