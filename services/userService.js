const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');
// const getConnection = require('../libs/postgres.js');
// const pool = require('../libs/postgresPool.js');
const { models } = require('../libs/sequelize.js');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 8);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    // const client = await getConnection();
    // const rta = await this.pool.query('SELECT * FROM tasks');
    const rta = await models.User.findAll({ include: ['customer'] });
    return rta;
  }

  async findByEmail(email) {
    // const client = await getConnection();
    // const rta = await this.pool.query('SELECT * FROM tasks');
    const rta = await models.User.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;