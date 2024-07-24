const express = require('express');
const cors = require('cors');
const path = require('path');
const itemsRouter = require('./routes/items');
const sequelize = require('./models');

const app = express();
const port = 3000;

// Conectar ao MySQL
sequelize.sync().then(() => {
  console.log('Conectado ao banco de dados MySQL');
});

// Middlewares
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, '../front')));

// Rotas
app.use('../back/routes/items', itemsRouter);

// Rota padrão para o arquivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/incio.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
