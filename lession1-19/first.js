var express = require('express')
var app = express()
var port = 3000
var bodyParser = require('body-parser')
var axios = require('axios').default;

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
axios({
    method:'GET',
    url:'http://localhost:3000/users',
    data :null
}).then( res =>{
    console.log(res)
}).catch(err=>{
    console.log(err);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))