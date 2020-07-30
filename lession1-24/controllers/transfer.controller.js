var shortid = require('short-id');
var db=require('../db')
module.exports.create=(req,res,next)=>{
    res.render('transfer/create',{  
        csrfToken: req.csrfToken() // tạo ra 1 tooken,đúng tooken mới chuyển tiền được
    });
    // res.render('transfer/create');
    //res.send(req.csrfToken());
}
module.exports.postCreate=(req,res,next)=>{
    var data={
        id:shortid.generate(),  
        amount:parseInt(req.body.amount),
        accountId:req.body.accountId,
        userID:req.signedCookies.userID  // người dang chuyển khoản
    }// tạo Id ngẫu nhiên lưu trên db
    db.get('transfers').push(data).write();
    res.redirect('/transfer/create')
}