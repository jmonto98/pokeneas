const os = require("os");
const pokeneas = require('../models/pokeneas.json');
const pokeneaView = require('../views/pokeneaView');

function getRandomPokenea() {
  const number = Math.floor(Math.random() * pokeneas.pokeneas.length);
  return pokeneas.pokeneas[number];
}

// Controlador para devolver HTML
exports.getPokeneaHTML = (req, res) => {
  const selectedPokenea = getRandomPokenea();
  const containerId = os.hostname();
  const html = pokeneaView.renderPokenea(selectedPokenea, containerId);
  res.send(html);
};

// Controlador para devolver JSON
exports.getPokeneaJSON = (req, res) => {
  const selectedPokenea = getRandomPokenea();
  const containerId = os.hostname();

  res.json({
    id: selectedPokenea.id,
    nombre: selectedPokenea.nombre,
    altura: selectedPokenea.altura,
    habilidad: selectedPokenea.habilidad,
    containerId: containerId
  });
};
