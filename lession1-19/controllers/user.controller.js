var db=require('../db')

module.exports.index=(req, res) =>  //a=index
    res.render('users/index',{
    users: db.get('users').value()   //trả về tất cả các gtri hiện dang có trong array
})
module.exports.search=(req,res) =>{
    var q=req.query.q;   // gtri q tren thanh nhap
    var matchedUsers=db.get('users').value().filter(function(user){ 
          //trả về 1 users,cái thỏa mãn đk return,user đại diện cho 1 ptu của  users
        return user.name.indexOf(q) !== -1;  // name !=q
    })
    res.render('users/index',{
        users:matchedUsers   // gửi xang  1 Object có mảng là matchedUsers
    })
}

module.exports.create=(req,res) =>{
    console.log('Cookie :' , req.cookies);
    res.render('users/create');
}

module.exports.get=(req,res)=>{
    var id=parseInt(req.params.id);   // lấy id trên thanh nhập
    var a=db.get('users').find( {id:id} ).value();  // tìm user có id=id trong file db.json
    res.render('users/view',{
        user:a     // gửi xang 1 Object có giá trị là a
    })
}
module.exports.postCreate=(req,res)=>{
    // var errors=[];
    // if(!req.body.name){
    //     errors.push('Name is required.')
    // }
    // if(!req.body.phone){
    //     errors.push('Phone is required.')
    // }
    // if(errors.length > 0){
    //     res.render('users/create',{
    //         errors:errors, 
    //         values:req.body   // values=gtri vừa nhập
    //     })
    //     return ;
    // }
    db.get('users').push(req.body).write();// them 1 Object mới
    res.redirect('/users')
}