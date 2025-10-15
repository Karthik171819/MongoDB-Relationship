//import mongodb from "mongodb";
const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;

(async () => {
    //Database connection
    let database;
    database = await MongoClient.connect('mongodb://127.0.0.1:27017')
    database = client.db('shop');
     if(!database) {
        console.log("Dtabase not connected");
     }else {
        console.log("Database  connected");
     }
    return database;
    });

//database query
    const orders = await database.collection('orders').aggregate([
    {
        $lookup:{
            from: 'products',
            localField:'product_ids',
            foreignField:'_id',
            as: "orderProducts"
        }
    }
]).toArray()
console.log(orders)

();
