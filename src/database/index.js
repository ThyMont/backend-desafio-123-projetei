const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const PessoaFisica = require('../models/PessoaFisica');

const connection = new Sequelize(dbConfig);

PessoaFisica.init(connection);

module.exports = connection;
