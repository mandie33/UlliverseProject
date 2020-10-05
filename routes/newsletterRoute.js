const router =require('express').Router();
const newsletterController=require("../controllers/newsletterController");



router.post("/newsletter",newsletterController.postNewsletter)

module.exports=router