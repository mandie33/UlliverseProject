const Destination=require("../models/Destination.model");
const  Cart=require("../models/Cart.model");

//Recuperation des destinations pour les passer dans la vue

const getDestinationOne=(req,res)=>{
    Destination.findOne({"planet":"Naboo"})
    .then(foundNaboo=>{
        if(foundNaboo){
            
            res.render('destinations',{destinations:[foundNaboo],
                                        title:"Naboo",
                                        src:"../images/theed.jpg",
                                        city:"../images/naboo.jpg",
                                        alt:"un ecrin de modernité"
                                        } )
                }
            }
        )
        .catch(err=>{res.send(err)})
    
}   

const getDestinationTwo=(req,res)=>{
    Destination.findOne({"planet":"Tatooine"})
    .then(foundTattoine=>{
        if(foundTattoine){
        res.render('destinations',{destinations:[foundTattoine],
                                    title:"Tatooine",
                                    src:"../images/tattoine.jpg",
                                    city:"../images/mosEspa.jpg",
                                    alt:"la planète aux 2 soleils"
                                    } )
        }
})
.catch(err=>{res.send(err)})
    
}




// const postCart=(req,res)=>{
//     Destination.findById(req.body.destinationId)
//     .then(destination=>{
//         // console.log(req.body.date)
//         let cart=new Cart({destinations:destination });
//         // cart.destinations.push({dates:date})
//         cart.save(err=>{
//                 if(err){res.send(err)} });  })
//     .then(()=>res.redirect("/panier/destination/:_id"))
//     .catch(err=>res.send(err))              
       
                
        
// //     } 


const postCart=(req,res)=>{
    Destination.findById(req.body.destinationId)
        .then(destination=>{
            let dates=req.body.dates;
            let users=req.body.users;
           
            let cart=new Cart({destinations:destination});
            // let totalPrice=0;
            // totalPrice=cart.destinations.price += cart.destinations.price;
            //cart.destinations.totalPrice = cart.totalPrice + parseInt(cart.destinations.price);
            cart.destinations.push({dates:dates,users:users})
            cart.save(err=>{
                if(err){res.send(err)}
                else{
                    req.session.cart=cart;
                    req.session.save(cart);

                    const { _id } = cart; 
                     
                Cart.findById(_id,function(err,cart){
                    if(cart){  
                     
                     res.render("cart",{cartProducts:[cart.destinations[0]],
                                    days:[cart.destinations[1]],
                                    totalPrice:0,
                                    qty:cart.destinations[1].users,
                                    title:"Panier",
                                    hasDestination:true,
                                    })
                    }else{res.render("cart",{
                        title:"Panier",
                        hasDestination:false})}
                    })
                }
        })
    })
    .catch((err)=>{res.send(err)})
}
// const postCart=(req,res)=>{
// Destination.findById(req.body.destinationId)
// .then(destination=>{

// let cart=new Cart({destinations:destination});
// let dates=req.body.dates;
// cart.destinations.push({dates:dates})
// console.log(cart)
//     cart.save(err=>{
//             if(err){res.send(err)}
//             else{
//                 const { _id } = cart; 
//             console.log({_id})  
//                res.redirect("/destinations/:id")}
        
                        
            
//             }
//                 )
//             })
// }


    


            
    

module.exports={
    getDestinationOne,
    getDestinationTwo,
    postCart
   
    }
                