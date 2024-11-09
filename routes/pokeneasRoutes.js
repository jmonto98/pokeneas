const express = require('express');
const router = express.Router();
const pokeneasController = require('../controllers/pokeneasController');

// Ruta que devuelve HTML
router.get('/', pokeneasController.getPokeneaHTML);

// Ruta que devuelve JSON
router.get('/api/pokenea', pokeneasController.getPokeneaJSON);

module.exports = router;
