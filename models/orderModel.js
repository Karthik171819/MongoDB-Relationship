//for every collection in mongoose you should do create model 
const {ObjectId} = require('mongodb');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:String
})

const  customerModel = mongoose.model('Customer', customerSchema);

const orderSchema = new mongoose.Schema({
    amount: String,
    customers_id: {
        type: ObjectId,
        ref: 'Customer'
    },
    product_ids:[
        {
            type: ObjectId,
            ref:'Product' //collection name
        }

    ]
});

const orderModdel = mongoose.model('Order', orderSchema);
module.exports = orderModdel;