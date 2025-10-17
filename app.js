// //import mongodb from "mongodb";
// const mongodb = require ('mongodb');
// const MongoClient = mongodb.MongoClient;

// (async () => {
//     //Database connection
//     let database;
//     database = await MongoClient.connect('mongodb://127.0.0.1:27017')
//     database = client.db('shop');
//      if(!database) {
//         console.log("Dtabase not connected");
//      }else {
//         console.log("Database  connected");
//      }
//     return database;
//     });

// //database query
//     const orders = await database.collection('orders').aggregate([
//     {
//         $lookup:{
//             from: 'products',
//             localField:'product_ids',
//             foreignField:'_id',
//             as: "orderProducts"
//         }
//     }
// ]).toArray()
// console.log(JSON.stringify(orders))

// ();

//Mongoose connection 
const mongoose = require('mongoose');
const OrderModel = require('./models/orderModel');
require('./models/productModel');
(async () => {
mongoose.connect('mongodb://127.0.0.1:27017/shop')
.then( () => {
    console.log("Database connected");
}).catch( () => {
    console.log("Database not connected");
})

const orders = await OrderModel.find({}).populate(['product_ids', 'customers_id']) //if it is single no need to give an array
console.log(orders);// can stringify
}) ();
