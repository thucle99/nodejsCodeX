var express = require('express')
var router = express.Router()

var controller=require('../controllers/product.controller') // dùng file controlelr


router.get('/',controller.girl)  // khi truy cap vao

module.exports = router    // ten bien router = express.Router()