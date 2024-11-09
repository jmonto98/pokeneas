// controllers/pokeneasController.js
const os = require("os");
const { getRandomPokenea } = require('../utils/functions');
const pokeneaHtml = require('../views/pokeneaHtml');
const pokeneaJson = require('../views/pokeneaJson');

// Controlador para devolver HTML
exports.getPokeneaHTML = (req, res) => {
  const selectedPokenea = getRandomPokenea();
  const containerId = os.hostname();
  const html = pokeneaHtml.renderPokenea(selectedPokenea, containerId);
  res.send(html);
};

// Controlador para devolver JSON
exports.getPokeneaJSON = (req, res) => {
  const selectedPokenea = getRandomPokenea();
  const containerId = os.hostname();
  const jsonResponse = pokeneaJson.renderPokeneaJson(selectedPokenea, containerId);
  res.json(jsonResponse);
};
