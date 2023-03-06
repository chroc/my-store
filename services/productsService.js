// const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');

// const pool = require('../libs/postgresPool.js');
// const sequelize = require('../libs/sequelize.js');
const { models } = require('../libs/sequelize.js');

class ProductsService {

    constructor() {
        // this.products = [];
        // this.generate();
        // this.pool = pool;
        // this.pool.on('error', (err) => console.error(err));
    }

    // generate() {
    //     const limit = 100;
    //     for (let index = 0; index < limit; index++) {
    //         this.products.push({
    //             id: faker.datatype.uuid(),
    //             name: faker.internet.userName(),
    //             price: faker.finance.amount(),
    //             image: faker.image.cats(),
    //             isBlock: faker.datatype.boolean()
    //         });
    //     }
    // }

    // async create(data) {
    //     const newProduct = {
    //         id: faker.datatype.uuid(),
    //         ...data
    //     };
    //     this.products.push(newProduct);
    //     return newProduct;
    // }

    async create(data) {
        const newProduct = models.Product.create(data);
        return newProduct;
      }

    async find(query) {
        // const query = 'SELECT * from tasks';
        // const rta = await this.pool.query(query);
        // const [data, metadata] = await sequelize.query(query);
        // const [data] = await sequelize.query(query);
        // return { data, metadata };

        // create options object for query filtering
        const options = {
            include: ['category'],
            where: {}
        };

        const { limit, offset, price, price_min, price_max } = query;

        // check for limit and offset values
        if (limit && offset) {
            options.limit = limit;
            options.offset = offset;
        }

        if (price) {
            options.where.price = price;
        }

        if (price_min && price_max) {
            options.where.price = {
                [Op.gte]: price_min,
                [Op.lte]: price_max
            };
        }

        const products = await models.Product.findAll(options);
          return products;
    }

    async findOne(id) {
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            throw boom.notFound('product not found');
        }
        if (product.isBlock) {
            throw boom.conflict('product is blocked');
        }
        return product;
    }

    async update(id, changes) {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        const product = this.products[index];
        this.products[index] = { ...product, ...changes };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        this.products.splice(index, 1);
        return { id };
    }
}

module.exports = ProductsService;