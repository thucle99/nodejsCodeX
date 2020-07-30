var db=require('../db');

module.exports.addToCart=(req,res,next)=>{
    var productId=req.params.productId;  // lấy id trên thanh nhập
    var sessionId=req.signedCookies.sessionId;  // lấy cookie
    if(!sessionId){  // k tồn tại sessions(trường hợp xóa session)
        res.redirect('/products');
        return;
    }
    var count=db.get('sessions')  // trả về số lượng hàng mua
        .find({id:sessionId})// trả về id
        .get('cart.' + productId,0)
        .value();  // trả về số lượng,nếu chưa có thì bằng 0
    db.get('sessions')
        .find({ id: sessionId})  // sessionId nhập vào và tại dòng 5,trả về Object
        .set('cart.' + productId, count+1)  //
        .write()  // tìm thấy id thì thê
    // var product=db.get('sessions').find({id:sessionId})
    //         .value().cart  ;// tra ve Object cart  
    // var producArr=Object.values(product);   // chuyen Object xang arr     
    // var sum=0;   
    // for(x in producArr){
    //     sum=sum +producArr[x];
    // }
    // console.log("Tổng:"+sum);    
    res.redirect('/products');
}
