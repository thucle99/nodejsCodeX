var express = require('express')
var app = express()
var port = 3000
const bodyParser = require('body-parser')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users=[
    {id:1, name:"Lam Thon"},
    {id:2, name:"Ngoc Hai"},
    {id:3,name:"Do Long"}
]
// app.get('/', (req, res) => res.send( '<h1>chào anh em</h1> <a href="/users">User List</a>' ) )   C1
// app.get('/', function(req,res){         C2
//     res.send('chao anh em')
// })
app.get('/', (req, res) => res.render( 'index',{
    name:"Thuc"   //Object,chuyen du lieu xang index
} ) )
app.get('/users', (req, res) => res.render('users/index',{
    users:users    // biến bên trái tùy ý
}))

app.get('/users/search',(req,res) =>{
    var q=req.query.q;  
    // giá trị cần tìm với q là gtri trên thanh,req.query là 1project nên cần .q
    var matchedUsers=users.filter(function(user){  //trả về 1 users,cái thỏa mãn đk return
        return user.name.indexOf(q) !== -1;  // name !=q
    })
    res.render('users/index',{
        users:matchedUsers
    })
 }) 

app.get('/users/create',(req,res) =>{
    res.render('users/create');
})
app.post('/users/create',(req,res)=>{
    // console.log(req.body);
    users.push(req.body);
    res.redirect('/users')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))