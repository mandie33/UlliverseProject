const {body,check, validationResult}=require("express-validator");

const validate=(req,res)=>{
    [
        body('email')
            .exists()
            .trim()
            .escape(),
    
        body('password')
            .exists()
            .trim()
            .escape()
        ]
    [
        check("email")
        .isEmail()
        .normalizeEmail(), 
    
        check("password")
        .isLength({min:8})
    ]
    const errors=validationResult(req,res);
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()
        })
    }
   
}
module.exports=validate;