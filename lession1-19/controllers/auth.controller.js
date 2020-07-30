
var md5=require('md5');
var db=require('../db');

module.exports.login=(req, res) =>  //a=index
    res.render('auth/login');
module.exports.postLogin=(req,res) =>{
    var email=req.body.email  // email mk nhập vào
    var password =req.body.password;  // mk nhap vao

    var user = db.get('users').find({email:email}).value();  // ktra mail json=nhập k

    if(!user){  // đúng tk thì đăng nhập
        res.render('auth/login',{
            errors:[
                'User does not exits'
            ],
            values:req.body  // nhap sai gtri k bi mat di
        })
        return;
    }
    var hashedPassword=md5(password);
    var b=md5('thuc1147');
    console.log(user.password + " and " + hashedPassword +" and "+b);
    if(user.password !== hashedPassword){  // đùng mk thì đăng nhập  //password
        res.render('auth/login',{
            errors:[
                'Wrong password'
            ],
            values:req.body
        })
        return;
    }
    res.cookie('userID',user.id,{
        signed: true    // dùng signedCookies
    });  // UserID=id của email vừa nhập
    res.redirect('/users');
}
