const mongoose = require('mongoose')

const trans = new mongoose.Schema({

    Sender:
    {
        type: String,
        required: true
    },
    Receiver:
    {
        type: String,
        required: true
    },
    Amount:
    {
        type: String,
        required: true
    },
    Time:
    {
        type: String,
        required: true
    },
    Date:
    {
        type: String,
        required: true
    }


});

const Userdb=mongoose.model('transactions',trans)
module.exports=Userdb;