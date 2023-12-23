// @ts-ignore
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String, 
        required: [true, 'Please enter your email'],
        unique: [true, 'Email already exists!'],
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        trim: [true, 'Password must not contain spaces'],
    },
    createdAt: {
        type: Date, 
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('user', userSchema);