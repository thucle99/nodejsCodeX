var express = require('express')
var router = express.Router()

var controller=require('../controllers/user.controller') // dùng file controlelr
var validate=require('../middlewares/user.validate')
var authMiddelware=require('../middlewares/auth.middleware');

router.get('/',authMiddelware.requireAuth,controller.index)  // dùng au  authMiddelware.requireAuth



router.get('/search',controller.search)  // tìm kiếm theo tên

router.get('/create',controller.create)

router.get('/:id',controller.get)

router.post('/create',validate.postCreate,controller.postCreate)
// validate demo  validate xong mới đến controller


module.exports = router    // ten bien router = express.Router()