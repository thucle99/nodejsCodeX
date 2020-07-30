require('dotenv').config()   // dùng file .env

//console.log(process.env.SESSION_SECRET);  //in ra biến môi trường SESSION_SECRET

var express = require('express')
var bodyParser = require('body-parser')

var userRoute=require('./routes/user.route')  // để dùng được file user.route.js
var userAuth =require('./routes/auth.route')
var userProduct=require('./routes/product.route');

var cookieParser = require('cookie-parser')  // user cookie
var port = 3000

var app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser('process.env.SESSION_SECRET')) //cakfkafafnankamskm dùng cho signed cookie

app.use(express.static('public'))  // dùng gọi các file tĩnh
app.use('/users',userRoute)  // bat dau "/users" thi check user route  // phải ở cuỗi 
app.use('/auth',userAuth)  // bat dau "/users" thi check user route  // phải ở cuỗi   
app.use('/product',userProduct)

app.get('/images/logo.jpg',(req,res)=>{
    res.send('abc');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))