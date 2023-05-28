const express = require('express')
const router = express.Router();
const productController=require('../controllers/productController')

router.get('/',productController.index);
router.get('/detalle/:index',productController.detalle)
router.get('/productAdd',productController.add)

module.exports = router;