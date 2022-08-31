const SellingController = require('../controllers/sellingController');

const router = require('express').Router()

router.get('/', SellingController.getSellingData)
router.get('/product', SellingController.getProductData)
router.get('/all', SellingController.getSummarySelling)
router.post('/in/:idproduct', SellingController.addSellingIn)
router.post('/out/:idproduct', SellingController.addSellingOut)

module.exports = router;