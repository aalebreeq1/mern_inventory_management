const router = require('express').Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

router.post('/', async (req, res) => {
    try {
        const { title, description, category, price, quantity } = req.body;

        const createdProduct = await Product.create({
            title,
            description,
            category,
            price,
            quantity

        });

        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create Product', error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch Product', error: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid Product ID' });

        }
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Invalid Product ID', error: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product  not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update Product', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product deleted successfully',
        });
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete product', error: error.message });
    }
});





module.exports = router;
