const { User, UserSchema } = require('./userModel.js');
const { Customer, CustomerSchema } = require('./customerModel.js');
const { Category, CategorySchema } = require('./categoryModel.js');
const { Product, ProductSchema } = require('./productModel.js');
const { Order, OrderSchema } = require('./orderModel.js');
const { OrderProduct, OrderProductSchema } = require('./orderProductModel.js');

function setUpModel (sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);
    Order.associate(sequelize.models);
    // OrderProduct.associate(sequelize.models);
}

module.exports = setUpModel;