require('dotenv').config();
const express = require("express");
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const app= require("https-localhost")();
const ejs = require("ejs");
const session=require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');

const cors=require("cors");

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//CORS

app.use(cors());

//CONNEXION A LA BASE DE DONNEES AVEC MONGOOSE
mongoose.connect(process.env.CONNECTION_MONGOOSE ,{useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to db"));
db.once('open', function(){
    console.log("connected to DB"); 
})

//ESPACE ADMIN AVEC ADMIN BRO
// const adminRouter=require("./routes/adminRouter")
// app.use("/admin",adminRouter);
// app.get("/admin",(req,res)=>{
//     res.render("page403");
// })

//SESSION
//je utilise la BDD pour stocker les sessions
app.use(session({
    secret: process.env.SECRET, //nom du cookie
    resave: false,//pour ne pas sauvegarder la session si pas de modif
    saveUninitialized: true, //
    store:new MongoStore({
        mongooseConnection:db,
        collection:"sessions"
    }),
    cookie: { 
             path: '/',
             secure: true ,
             maxAge:1000*60*60,//en ms égale à 1 heure
             //httpOnly:true//seulement accessible pour le serveur et non par le client
    }
}));
//POUR LES NOTIFICATIONS
app.use(flash());



//LES VUES
const viewRoute=require("./routes/viewsRoute");
app.use(viewRoute)

//ROUTES

//USER ROUTES
const userRegisterRoute = require('./routes/userRegisterRoute')
app.use(cors(),userRegisterRoute);

const userLoginRoute = require('./routes/userLoginRoute')
app.use(cors(),userLoginRoute,);



//DESTINATION ROUTES
const destinationRoute=require("./routes/destinationRoute")
app.use(destinationRoute);

//CART ROUTE
const cartRoute=require("./routes/cartRoute")
app.use(cartRoute)

    //CONTACT ROUTES
const contactRoute=require("./routes/contactRoute")
app.use(contactRoute);




//HOME PAGE ROUTE

const homeRoute=require("./routes/homeRoute")
app.use(homeRoute)

//NEWSLETTER ROUTES

const newsletterRoute=require("./routes/newsletterRoute");
app.use(newsletterRoute)

module.exports= app;



app.listen(3000, ()=>{
    console.log("successfully connected on port 3000")
})

