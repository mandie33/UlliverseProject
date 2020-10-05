const router =require('express').Router();
const homeController=require("../controllers/homePageController");


router.get("/accueil",homeController.getText)

module.exports=router