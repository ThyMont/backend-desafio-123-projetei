const express = require('express');
const PessoaFisicaController = require('./controllers/PessoaFisicaController');

const routes = express.Router();

routes.get('/', PessoaFisicaController.index);
routes.post('/', PessoaFisicaController.store);
routes.delete('/:cpf', PessoaFisicaController.delete);

module.exports = routes;
