'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

exports.user = function() {
    var userSchema = Schema({
        id : Schema.ObjectId,
        email : String,
        password : String,
        token : String,
        createdAt : Date,
        updatedAt : Date
    }); 

    return Model('user',userSchema);
};