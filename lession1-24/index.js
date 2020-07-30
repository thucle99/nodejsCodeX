require('dotenv').config()   // dùng file .env

//console.log(process.env.SESSION_SECRET);  //in ra biến môi trường SESSION_SECRET

var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')  // user cookie
var multer  = require('multer')    // user multer
var csurf = require('csurf')  // user csurf


var userRoute=require('./routes/user.route')  // để dùng được file user.route.js
var userAuth =require('./routes/auth.route')
var userProduct=require('./routes/product.route');
var cartRoute=require('./routes/cart.route');
var transferRouter=require('./routes/transfer.route');

var authMiddleware=require('./middlewares/auth.middleware')

var sessionMiddleware=require('./middlewares/session.middleware')
var port = 3000

var app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser(process.env.SESSION_SECRET)) //cakfkafafnankamskm dùng cho signed cookie
app.use(sessionMiddleware) // hoạt động ở tất cả các router


app.use(express.static('public'))  // dùng gọi các file tĩnh
app.use('/users',authMiddleware.requireAuth,userRoute)  // bat dau "/users" thi check user route  // phải ở cuỗi 
app.use('/auth',userAuth)  // bat dau "/users" thi check user route  // phải ở cuỗi   
app.use(csurf({cookie :true}));   
//tạo 1 token,gửi thêm 1 token,đúng ms chuyển tiền được,phải sau auth
app.use('/products',userProduct)
app.use('/cart',cartRoute)

app.use('/transfer',authMiddleware.requireAuth,transferRouter)



// app.get('/images/logo.jpg',(req,res)=>{
//     res.send('abc');
// });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))