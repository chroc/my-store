const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    isBlocked: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'is_blocked',
        defaultValue: false
    }
};

class Product extends Model {
    static associate () {
        //..
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        };
    }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };