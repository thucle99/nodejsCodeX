var express = require('express')
var router = express.Router()

var controller=require('../controllers/auth.controller') // dùng file controlelr


router.get('/login',controller.login)  // khi truy cap vao

router.post('/login',controller.postLogin);  // khi bam vao button ,

module.exports = router    // ten bien router = express.Router()