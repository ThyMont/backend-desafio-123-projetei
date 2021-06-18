const express = require('express');
<<<<<<< HEAD
const pfRouter = require('./routes/PessoaFisicaRouter');
const app = express();
const port = 3001;

app.use('/pf', pfRouter);
app.get('/', (req, res) =>
  res.json({ message: 'Acesse a rota /pf para listar todos os resultados' })
);
=======
const app = express();
const port = 3001;

app.get('/', (req, res) => res.json({ message: 'Hello world' }));
>>>>>>> parent of 8942d28 (Criação do Model e das rotas principais do Router de Pessoa Fisica)
app.listen(port);
