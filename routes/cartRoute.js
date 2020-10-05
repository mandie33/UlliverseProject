const router = require('express').Router({mergeParams:true});
const cartController=require('../controllers/cartController');



router.get("/panier/destination",cartController.getCart)
router.post("/panier",cartController.deleteCart);



module.exports=router;