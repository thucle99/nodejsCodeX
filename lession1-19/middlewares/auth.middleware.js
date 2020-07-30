var db=require('../db')
var md5=require('md5');
module.exports.requireAuth=function(req,res,next){
    console.log(req.signedCookies.cookies+ req.cookies.userID);
   if(!req.signedCookies.userID){  // đúng cookie mới truy cập được
       res.redirect('auth/login');
       return;
   }
   var user =db.get('users').find({ id:req.signedCookies.userID}).value();
   // tìm xem user id trong mtinh= id duoc gui len k
   if(!user){
       res.redirect('/auth/login');
       return;
   }
   res.locals.user=user;  // user tai dong 9 dung de hien thi ten tk
   next();
};