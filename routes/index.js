const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({}).sort([['createdAt', 'descending']])
        res.send({ products })
    } catch (err) {
        res.status(400).send({ error: 'error show products'})
    }
})

router.post('/',async (req, res) => {
    try {
        
        const product = await Product.create(req.body)

        await product.save()

        res.send('created product successfuly')
    } catch (err) {
        
        res.status(400).send({ error: 'error create product'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        
        const product = await Product.findById(req.params.id)

        res.send({ product })

    } catch (err) {
        res.status(400).send({ error: 'error to find product'})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        await updatedProduct.save()

        res.send({ updatedProduct })

    } catch (err) {
        res.status(400).send({ error: 'error updating product' })
    }
})

router.delete('/:id', async (req, res) => {
    try {

        await Product.findByIdAndDelete(req.params.id)

        res.send()
        
    } catch (err) {
        res.status(400).send({ error: 'error delete product'})
    }
})

module.exports = router