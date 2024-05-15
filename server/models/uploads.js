const mongoose = require("mongoose");

const uploadsSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    contact: {
        type: Number, required: true
    },
    location: {
        type: String, required: true
    },
    nameOfSeller: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    imagePath: {
        type: String, required: false
    },
    category: {
        type: String, required: false
    },
    date: {
        type: Date
    },
});

module.exports = mongoose.model("Uploads", uploadsSchema);