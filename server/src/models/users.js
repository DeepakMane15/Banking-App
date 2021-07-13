const mongoose = require('mongoose')

const usersTemplate = new mongoose.Schema({
    Name: {
        type:String,
        required:true

    },
    Email: {
        type: String,
        required:true
    },
    AcNo : {
        type: String,
        required:true
    },
    Balance : {
        type: String,
        required:true
    }
})


const Userdb=mongoose.model('mytables',usersTemplate)
module.exports=Userdb;