const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const mongoose=require("mongoose");
const AdminBroMongoose = require('admin-bro-mongoose')

require("../models/User.model");
require("../models/Destination.model");
require("../models/Cart.model");
require("../models/HomePage.model")

AdminBro.registerAdapter(AdminBroMongoose)


 const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  branding: {
    companyName: 'Ulliverse Travel Agency',
  },
 })


const router = AdminBroExpress.buildRouter(adminBro)

module.exports=router