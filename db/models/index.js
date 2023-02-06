const { User, UserSchema } = require('./userModel.js');
const { Product, ProductSchema } = require('./productModel.js');

function setUpModel (sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setUpModel;