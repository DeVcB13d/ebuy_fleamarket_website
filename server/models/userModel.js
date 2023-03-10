const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userModelSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('userModel',userModelSchema)