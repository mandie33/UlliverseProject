const mongoose = require('mongoose');

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true],
        minlength:2,
        maxlength:50
    },
    email:{
        type:String,
        required:[true, "entrée requise"]

        },
    phone:{
        type:String,
        required:[false]
    },
    subject:{
        type:String,
        required:[true]
    },
    text:{
        type:String,
        required:[true, "entrée requise"],
        minLength:2,
        maxLength:3000
    },
    
},
{timestamps: { type: Date, default: Date.now()  } })

const Contact=mongoose.model("Contact",contactSchema)
module.exports=Contact