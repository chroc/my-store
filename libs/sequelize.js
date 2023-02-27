const { Sequelize } = require('sequelize');

const { config } = require('./../config/config.js');
const setUpModel = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI=`mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI=`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    // dialect:'mysql',
    dialect:'postgres',
    logging:true
});

setUpModel(sequelize);

// no longer used since we are doing migrations
// sequelize.sync();

module.exports = sequelize;