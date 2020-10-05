const router =require('express').Router();
const userLoginController=require("../controllers/userLoginController");

router.post("/connexion",userLoginController.authenticateUser);
router.get("/espaceClient",(req,res)=>{
    if(req.session.user){
     
     res.render("espaceClient",{
        title:"Espace client",
         user: req.session.user.name})}
    else{

      
        res.redirect("/connexion")}
})

router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        
         res.redirect('/accueil');
    });

});



module.exports=router

        