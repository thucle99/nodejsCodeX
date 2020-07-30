var express = require('express')
var router = express.Router()

var controller=require('../controllers/cart.controller') // dùng file controlelr


router.get('/add/:productId',controller.addToCart)  // biến đặt là productId
//// khi bấm vào button sẽ truy cập đến products/add/products.id

module.exports = router    // ten bien router = express.Router()