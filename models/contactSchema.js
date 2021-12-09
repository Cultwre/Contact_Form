const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required',
    },
    surname: {
        type: String,
        required: 'Surame is required',
    },
    email: {
        type: String,
        required: 'Email is required',
    },
    address: {
        type: String,
        required: 'Address is required',
    },
    number: {
        type: Number,
        required: 'Number is required',
    },
    theme: {
        type: String,
        required: 'Theme is required',
    },
    message: {
        type: String,
        required: 'Message is required',
    }
})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;