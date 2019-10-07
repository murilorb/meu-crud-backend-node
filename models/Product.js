const mongoose = require('../db')


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
},{
    timestamps: true
})



module.exports = mongoose.model('Product', ProductSchema)
