const mongoose = require('mongoose');

const resetTokens = new mongoose.Schema({
    token :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    expire_at : {
        type : Date,
        default : Date.now(),
        expires : "5m"
    }
})

module.exports = mongoose.model("resetToken",resetTokens)