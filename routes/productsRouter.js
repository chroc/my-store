const express = require('express');

const ProductsService = require('../services/productsService.js');

const router = express.Router();
const service = new ProductsService();

// GET all products
router.get('/', async (req, res) => {
    //..
    const products = await service.find();

    res.json(products);
});

// GET filter products
router.get('/filter', (req, res) => {
    res.send('Filter');
});

// GET product by id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await service.findOne(id);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// POST create new product
router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

// PATCH update a product
router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        res.json(rta);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
});

module.exports = router;