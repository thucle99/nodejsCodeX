
var db=require('../db');

module.exports.girl=(req, res) =>{ //a=index
   var page=parseInt(req.query.page) ||1  //vi tri trang  khong có gtri mặc định là 1
   var perPage=8;   //so ptu trong 1 trang
   var start=(page-1)*perPage;
   var end=page*perPage
   res.render('products/girl',{  
   products:db.get('products').value().slice(start,end) // dùng trong phân trang
  
})
   // res.send(db.get('products').value())
}
