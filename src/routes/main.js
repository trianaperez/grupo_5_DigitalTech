const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.main);

module.exports = router;