var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
/* GET home page. */
router.get('/', indexController.index);
router.get('/detalle/:pos',indexController.show);
module.exports = router;
