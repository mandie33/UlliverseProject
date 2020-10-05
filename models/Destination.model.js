const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const destinationSchema=new Schema({
    destinationId:{
        type:String
    },
    planet:{
        type:String,
        required:[true]
    },
    city:{
        type:String,
        required:[true]
    },
    description:{
    type:String,
    required:[true]
    },

    
    
    nbUser:{
        type:Number,
        required:[true],
        max:3
        
        
    },
    duration: {
        type:Number,
        required:[true],
        
        max:7
    },
    price:{
        type:Number,
        required:[true],
        
    }
   

 },

{timestamps: { type: Date, default: Date.now()  } });



const Destination=mongoose.model("Destination",destinationSchema)
module.exports=Destination;