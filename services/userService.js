const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres.js');
// const pool = require('../libs/postgresPool.js');
const { models } = require('../libs/sequelize.js');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    return data;
  }

  async find() {
    // const client = await getConnection();
    // const rta = await this.pool.query('SELECT * FROM tasks');
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;