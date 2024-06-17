const express = require('express');
const app = express();
const { sequelize } = require('./models');

const livroRoutes = require('./routes/routes');
const autorRoutes = require('./routes/routes');
const usuarioRoutes = require('./routes/routes');

app.use(express.json());
app.use('/api', livroRoutes);
app.use('/api', autorRoutes);
app.use('/api', usuarioRoutes);

const PORT = process.env.PORT;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
