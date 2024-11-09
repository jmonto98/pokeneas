const { app, port } = require('./config/pokeConfig');

// Importa las rutas
const pokeneasRoutes = require('./routes/pokeneasRoutes');

// Usa las rutas
app.use('/', pokeneasRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});