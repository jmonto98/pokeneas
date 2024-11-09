const pokeneas = require('../models/pokeneas.json');

function getRandomPokenea() {
  const number = Math.floor(Math.random() * pokeneas.pokeneas.length);
  return pokeneas.pokeneas[number];
}

module.exports = { getRandomPokenea }