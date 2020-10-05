const User=require("../models/User.model");
const validate=require("./validation");
const bcrypt=require("bcrypt");
const saltRounds=10;

const registerUser=async(req,res)=>{
//vérification des données saisies par l'utilisateur.
validate
// Vérifier si l'utilisateur est présent dans la bdd ou pas
let user = await User.findOne({ email: req.body.email });
    if (user) {
        req.flash("existant","cet utilisateur existe déjà")
        return res.redirect("/creationEspaceClient")
    }else {
        // Créer un nouvel utilisateur si il n'exite pas:
        user = new User({
            name:req.body.name,
            email: req.body.email,
            password: req.body.password
                    });
        //crypter le mot de passe
        user.password = await bcrypt.hash(user.password, saltRounds);
        await user.save(
                err=>{
                if(err){res.send(err)}
                });
        req.flash("succes","Vous êtes bien enregistré!Vous pouvez vous connecter")
        res.redirect("/connexion");
    }
}

module.exports={registerUser}
