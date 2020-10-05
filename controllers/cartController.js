const Cart=require("../models/Cart.model");
// const { getCart } = require("./destinationController");

// // const getCart=(req,res)=>{
// //     let id=req.params.id
// //     console.log(`param=${id}`)
// //     Cart.findOne({id})
// //     .then(cart=>{
// //         if(cart){
// //             res.render("cart",{cartProducts:[cart.destinations[0]],
// //                            days:[cart.destinations[1]],
// //                            hasDestination:true,
// //                            })
// //            }else{console.log(err)}
// //     }) 
// //     .catch(err=>{console.log("erreur")})  
// // }

const getCart=(req,res)=>{
     let id=req.params.id
   
        Cart.findOne({id})
        .then(cart=>{
            if(cart){
                res.render("cart",{cartProducts:[cart.destinations[0]],
                                    days:[cart.destinations[1]],
                                    totalPrice:0,
                                    qty:cart.destinations[1].users,
                                    title:"Panier",
                                    hasDestination:true,
            })
            }else{
                res.render("cart",{
                    title:"Panier",
                    hasDestination:false})
            }
        }) 
        .catch(()=>{console.log("erreur")})  
    }
    
    const deleteCart= (req,res)=>{
        Cart.findOneAndDelete({})
        .then((cart)=>{
        cart.destinations.id().remove();
        })
        
        .catch(err=>{res.send(err)})
        res.redirect("/panier/destination")
    }
           

module.exports={
    getCart,
    deleteCart,
    }