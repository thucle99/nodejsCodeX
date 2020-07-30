var express = require('express')
var router = express.Router()

var db=require('../db')
var controller=require('../controllers/user.controller')

router.get('/',controller.index)

router.get('/', (req, res) => res.render('users/index',{
    users: db.get('users').value()
}))

router.get('/search',(req,res) =>{
    var q=req.query.q;  
    var matchedUsers=users.filter(function(user){  //trả về 1 users,cái thỏa mãn đk return
        return user.name.indexOf(q) !== -1;  // name !=q
    })
    res.render('users/index',{
        users:matchedUsers
    })
 }) 

router.get('/create',(req,res) =>{
    res.render('users/create');
})

router.get('/:id',(req,res)=>{
    var id=parseInt(req.params.id);
    var a=db.get('users').find( {id:id} ).value();  // tìm user có id=id.
    res.render('users/view',{
        user:a     // user của bên index.pug
    })
})
router.post('/create',(req,res)=>{
    db.get('users').push(req.body).write();
    res.redirect('/users')
})


module.exports = router