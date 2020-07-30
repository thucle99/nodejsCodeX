var shortid = require('short-id');
var db=require('../db');

module.exports =(req,res,next) =>{
    if(!req.signedCookies.sessionId){
        var sessionId=shortid.generate(); // tạo ra sessionId ngẫu nhiên
        res.cookie('sessionId',sessionId,{ // session ngẫu nhiên,chưa dnhap sẽ gán cho setCookie
            signed: true    // dùng signedCookies
        });  // UserID=id của email vừa nhập
        db.get('sessions').push({
            id:sessionId   // id=cookie
        }).write();
    }
    next();
}