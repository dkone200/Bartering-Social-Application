const mongoose = require('mongoose')

const Item = new mongoose.Schema({
    Title: {type: String, default:''},
    Description: {type: String, default:''},
    Price: {type: Number, default:''},
    Image:
    {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Item', Item);