const { User, UserSchema } = require('./userModel.js');
const { Product, ProductSchema } = require('./productModel.js');
const { Customer, CustomerSchema } = require('./customerModel.js');

function setUpModel (sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));

    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Product.associate(sequelize.models);
}

module.exports = setUpModel;