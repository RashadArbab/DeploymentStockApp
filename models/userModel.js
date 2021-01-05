const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String, email: String, pass: String,
    stock: [{ Ticker: String, Market: String, Notes: [String] }]
});

// Model
const userModel = mongoose.model('user', userSchema);

module.exports =  userModel;