const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    firstName: {type: String, default:''},
    lastName: {type: String, default:''},
    email: {type: String, default:''},
    password: {type: String, default:''},
    timestamp: {type: Date, default: Date.now},
})

const User = mongoose.model ('User', userSchema)
module.exports = User