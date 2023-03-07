const mongoose = require('mongoose')

const Barter = new mongoose.Schema({
    Title: {type: String, default:''},
    Item1: {type: String, default:''},
    Description: {type: String, default:''},

    timestamp: {type: Date, default: Date.now},
    
})

module.exports = mongoose.model('Barter', Barter);