var express = require('express')
var multer  = require('multer')  // dùng để up file ảnh
// trước khi validate phải phân tích dữ liệu,(đọc dữ liệu từ request của mình)

var controller=require('../controllers/user.controller') // dùng file controlelr
var validate=require('../middlewares/user.validate')
var authMiddelware=require('../middlewares/auth.middleware');

var upload = multer({ dest: './public/uploads/' })  // chỗ lưu file tải lên

var router = express.Router()

router.get('/',authMiddelware.requireAuth,controller.index)  // dùng au  authMiddelware.requireAuth



router.get('/search',controller.search)  // tìm kiếm theo tên

router.get('/create',controller.create)

router.get('/:id',controller.get)

router.post('/create',
    upload.single('avatar'),//uploat file tên avatar
    validate.postCreate,// validate demo  validate xong mới đến controller
    controller.postCreate
);


module.exports = router    // ten bien router = express.Router()