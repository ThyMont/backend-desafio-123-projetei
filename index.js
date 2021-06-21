require('./src/database');
const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use('/pf', routes);
app.get('/', (req, res) =>
  res.json({ message: 'Acesse a rota /pf para listar todos os resultados' })
);
app.listen(port);
