const Contact=require("../models/Contact.model");
const {body,check, validationResult}=require("express-validator"); 


const validateMessage=(req,res)=>{
    [
        body('name')
            .exists()
            .trim(),
    
        body('email')
            .exists()
            .trim(),
        body('text')
            .exists(),
            
        ]
    [
        check("name")
        .isLength({min:2}),
        check("email")
        .isEmail()
        .normalizeEmail(),
        check("text")
        .isLength({min:2}) 
    
        
    ]
    
}
const postMessage=async(req,res)=>{
    try{
    validateMessage();
    const{name,email,phone,subject,text}=req.body;
    const newMessage= await Contact.create({name,email,phone,subject,text})
    newMessage.save((err)=>{
        if(err){res.send(err)}
        else{
            req.flash("succes","Nous avons bien reçu votre message.\n Il sera traité dans les meilleurs délais")
            res.redirect("/contact")}
    })
}catch(err){res.send(err)}
}




   
module.exports={postMessage}