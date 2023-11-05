const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.index); 

router.get('/create', productsController.create); 
router.post('/', productsController.store);

router.get('/detail/:id', productsController.detail); 

router.get('/:id/edit', productsController.edit); 
router.put('/:id', productsController.update);

router.delete('/:id', productsController.destroy); 


module.exports = router;