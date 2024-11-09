const express = require('express');
const app = express();
const port = 8080;

// Importa las rutas
const pokeneasRoutes = require('./routes/pokeneasRoutes');

// Usa las rutas
app.use('/', pokeneasRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});