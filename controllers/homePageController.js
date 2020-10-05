const Home=require("../models/HomePage.model")

const getText=(req,res)=>{
        Home.findOne({"textId":"accueil"},function(err,result){
            if(result){
                res.render("accueil",{
                    title:"Accueil",
                    textes:[result]} )
                }
            else{console.log(err)}
        })
}

module.exports={getText}