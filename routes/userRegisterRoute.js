const router =require('express').Router();
const userController=require("../controllers/userRegisterController");


router.post("/creationEspaceClient",userController.registerUser)
                    
                    
                    
                    
module.exports=router;

