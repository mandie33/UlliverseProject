const https=require("https");

const postNewsletter=(req,res)=>{
    const fname=req.body.fname;
    const email=req.body.email;
    const data= {
            members:[{
                email_address:email,
                status:"subscribed",
                merge_fields:{
//propriété à chercher dans seetings->Audience fields and *|MERGE|* tags
                    FNAME:fname  ,                         
                    EMAIL:email
                }

            }],
//valeur sera la variable déclarée au dessus contenant la requête 
}
//objet js à convertir en JSON string
    const jsonData=JSON.stringify(data);
    const url=process.env.CONNECTION_MAILCHIMP;
    const options= {
        method:"POST",//méthode pour envoyer données
        auth:process.env.API_KEY

}
const request=https.request(url,options,(res)=>{
      res.on("data",(data)=>{
                console.log(JSON.parse(data));
        })
});
     request.write(jsonData);
     request.end();
     req.flash("msg","Votre abonnement a bien été pris en compte!")
     res.redirect("/newsletter")
}
module.exports={postNewsletter}