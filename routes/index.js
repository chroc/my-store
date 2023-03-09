const express = require('express');
const productsRouter = require('./productsRouter.js');
const usersRouter = require('./usersRouter.js');
const categoriesRouter = require('./categoriesRouter.js');
const customersRouter = require('./customerRouter.js');
const orderRouter = require('./orderRouter.js');
const authRouter = require('./authRouter.js');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/orders', orderRouter);
    router.use('/customers', customersRouter);
    router.use('/auth', authRouter);
}

module.exports = routerApi;