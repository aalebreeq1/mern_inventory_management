const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product Title is required'],
        trim: true,
    },
    description: {
        type: String,
        max: [500, 'Description must be less than 500 word'],
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "food", "clothing", "furniture", "other"]
    },
    price: {
        type: Number,
        required: true,
        min: 0.1
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true })

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product