const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defi schema for model
const Course = new Schema({
    name: { type: String, maxLength: 255 },
    desc: { type: String },
    image : { type: String },
    createdAt : { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', Course);