const router =require('express').Router();

router.get("/",(req,res)=>{
    res.render("page404",{title:"Erreur"});
})
router.get("/panier",(req,res)=>{
    res.render("page404",{title:"Erreur"});
})
router.get("/destinations",(req,res)=>{
    res.render("page404",{title:"Erreur"});
})


router.get("/panier/fin",(req,res)=>{
    res.render("pageFin",{title:"Fin"})
})

router.get("/contact",(req,res)=>{
    res.render("contact",{
        title:"Contact",
        message:req.flash("succes")});
})

router.get("/connexion",(req,res)=>{
    res.render("login",{
        title:"Se connecter",
        message:req.flash("succes"),
                            msg:req.flash("nonTrouve"),
                            deco:req.flash("recon"),
                            mdp:req.flash("mdpKO")
    });
})

router.get("/creationEspaceClient",(req,res)=>{
    res.render("register",{
        title:"S'enregistrer",
        message:req.flash("existant")});
})

// router.get("/contact",(req,res)=>{
//     res.render("contact");
    
// })

router.get("/CGV",(req,res)=>{
    res.render("CGV",{title:"CGV"})
})  

router.get("/CGUPC",(req,res)=>{
    res.render("PC",{title:"CGU"})
})
router.get("/newsletter",(req,res)=>{
    res.render("newsletter",{
        title:"Newsletter",
        "message":req.flash("msg")})

})

module.exports=router