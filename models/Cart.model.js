const mongoose = require('mongoose');



const Schema=mongoose.Schema;

// const bookingSchema=new Schema({
    
//     planet: {
//         type: String,
//         required: true,
        
//     },

//     nbUser:{
//         type:Number,
//         required:[true]
//     },
    
//     duration: {
//         type: Number,
//         required: true,
        
//     },
  
//     totalPrice: {
//         type: Number,
//         required: true,
//     }
// }, {
//     timestamps: { type: Date, default: Date.now()  }
// })


const cartSchema=new Schema({

  
      //   id: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "Destination"
      // },
    //   userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    //   },
    
    
    destinations: [{
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination"
      },
        
      destinationId: {
        type: String,
        ref: "Destination"
          },
        planet:String,
     
        users: Number,
  

        dates:String,
       
      
        duration:Number,
      

        price: Number,
      
    }],
timestamps: { type: Date, default: Date.now()  } }

)


const Cart=mongoose.model("Cart",cartSchema);

module.exports= Cart;