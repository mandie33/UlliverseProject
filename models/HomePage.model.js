const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomePageSchema=new Schema({
           textId:{
               type:String,
               required:[true]
           },
           slogan:{
               type:String,
               required:[true]
           },

           presentation:{
               type:String,
               required:[true]
           },

           titleOne:{
            type:String,
            required:[true]
           },
           titleTwo:{
            type:String,
            required:[true]
           },
           titleThree:{
            type:String,
            required:[true]
           },

           textOne:{
            type:String,
            required:[true]
           },

           textTwo:{
            type:String,
            required:[true]
           },

           textThree:{
            type:String,
            required:[true]
           },

           story:{
            type:String,
            required:[true]
           },created_at: { type: Date, default: Date.now()  } 
        });

const HomePage=mongoose.model("Home",HomePageSchema)
module.exports=HomePage;


















