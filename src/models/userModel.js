const mongoose = require('mongoose');
const { hashPassword } = require('../services/hashingService');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await hashPassword(this.password);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
