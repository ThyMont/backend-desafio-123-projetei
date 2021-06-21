const express = require('express');
const PessoaFisicaController = require('./controllers/PessoaFisicaController');

const routes = express.Router();

routes.post('/', PessoaFisicaController.store);
routes.get('/', PessoaFisicaController.index);
routes.get('/:cpf', PessoaFisicaController.findById);
routes.delete('/:cpf', PessoaFisicaController.delete);
routes.put('/:cpf', PessoaFisicaController.edit);

module.exports = routes;
