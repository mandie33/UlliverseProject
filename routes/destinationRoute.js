const router =require('express').Router({mergeParams:true});
const destinationController=require("../controllers/destinationController");


router.get("/destinations/Naboo",destinationController.getDestinationOne);
router.get("/destinations/Tatooine",destinationController.getDestinationTwo);
router.post("/panier/destination",destinationController.postCart)



module.exports=router