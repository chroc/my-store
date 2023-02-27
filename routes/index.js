const express = require('express');
const productsRouter = require('./productsRouter.js');
const usersRouter = require('./usersRouter.js');
const categoriesRouter = require('./categoriesRouter.js');
const customersRouter = require('./customerRouter.js');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/customers', customersRouter);
}

module.exports = routerApi;