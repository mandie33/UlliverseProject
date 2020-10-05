const User=require("../models/User.model");
const bcrypt=require("bcrypt");

const authenticateUser=async(req,res)=>{
  try{
 //vérifier si utilisateur a saisi le bon identifiant
const user= await User.findOne({email:req.body.email})

  if (!user) {
      req.flash("nonTrouve","utilisateur non trouvé ou identifiant incorrect")
      return res.redirect("/connexion")
    } else {
    //Si oui, vérifier le mot de passe
    const isValid= await bcrypt.compare(req.body.password, user.password)
    if (isValid) {
      //On vérifie que la session est active
        req.session.user=user;
        req.session.save(user);
        if(!req.session.user){
          req.flash("recon","Vous êtes déconnecté de votre compte,veuillez vous reconnecter")
          return res.redirect("/connexion")
        }else{
         
            return res.redirect("/espaceClient");
        }
      }
    else {
      req.flash("mdpKO","Mot de passe incorrect")
        return res.redirect("/connexion")
      }
    }
  }
catch(err){res.send(err)}
}

module.exports={authenticateUser}
    