const { Sequelize } = require('sequelize');

// Conectar ao banco de dados MySQL
const sequelize = new Sequelize('concessionaria', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
