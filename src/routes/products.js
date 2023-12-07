const express = require('express');
const router = express.Router();

const productController = require('../controllers/productControllers')

router.get('/', productController.index); 

router.get('/create', productController.create); 
router.post('/', productController.store);

router.get('/detail/:id', productController.detail); 

router.get('/:id/edit', productController.edit); 
router.put('/:id', productController.update);

router.delete('/:id', productController.destroy); 


module.exports = router;