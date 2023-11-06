const mongoose = require('mongoose')

const Coin = new mongoose.Schema({
    Coin: {type: Number, default: 0},
    timestamp: {type: Date, default: Date.now},
    
})

module.exports = mongoose.model('Coin', Coin);