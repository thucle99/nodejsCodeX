var express = require('express')
var router = express.Router()

var controller=require('../controllers/transfer.controller') // dùng file controlelr


router.get('/create',controller.create)  // biến đặt là productId
//// khi bấm vào button sẽ truy cập đến products/add/products.id
router.post('/create',controller.postCreate);

module.exports = router    // ten bien router = express.Router()