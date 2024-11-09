const express = require('express')
const os = require("os");
const app = express()
const port = 8080


const pokeneas = require('../models/pokeneas.json');

// Ruta que devuelve HTML con imagen y frase filosófica de un Pokenea
app.get('/', (req, res) => {
  const number = Math.floor(Math.random() * pokeneas.pokeneas.length);
  const selectedPokenea = pokeneas.pokeneas[number];
  const containerId = os.hostname(); // Obtiene el ID del contenedor

  res.send(`
    <div style="max-width: 400px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; font-family: Arial, sans-serif; text-align: center;">
      <h1 style="color: #2a9d8f;">${selectedPokenea.nombre}</h1>
      <p><strong>ID:</strong> ${selectedPokenea.id}</p>
      <p><strong>Altura:</strong> ${selectedPokenea.altura}</p>
      <p><strong>Habilidad:</strong> ${selectedPokenea.habilidad}</p>
      <img src="${selectedPokenea.imagen}" alt="${selectedPokenea.nombre}" style="width: 150px; margin: 10px 0;">
      <p style="font-style: italic; color: #555;">"${selectedPokenea.fraseFilosofica}"</p>
      <p style="margin-top: 20px; font-size: 0.9em; color: #888;">ID del Contenedor: ${containerId}</p>
    </div>
  `);
});

// Ruta que devuelve JSON con información aleatoria de un Pokenea
app.get('/api/pokenea', (req, res) => {
  const number = Math.floor(Math.random() * pokeneas.pokeneas.length);
  const selectedPokenea = pokeneas.pokeneas[number];
  const containerId = os.hostname(); // Obtiene el ID del contenedor

  res.json({
    id: selectedPokenea.id,
    nombre: selectedPokenea.nombre,
    altura: selectedPokenea.altura,
    habilidad: selectedPokenea.habilidad,
    containerId: containerId
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});