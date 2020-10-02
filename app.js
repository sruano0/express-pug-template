//create a Restful API(CRUD)
//GET,POST,PATCH,DELETE

/*TO DO:
npm install nodemon and make it work
create an express app.
then install mongoose into the package.json and then creat a very simple app that can GET,POST,PATCH, AND DELETE

*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const Pricing = require("./Customer.model")

// const mongoose = require('mongoose')
const port = process.env.port || 3000;
// const db = //add the test db and the user collection 
// mongoose.connect()
// //GO ON YOUTUBE AND SEE ABOUT THIS MONGOOSE.CONNECT
 

//Middleware
//This sets this app's view engine to be pug
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
})) //This does so when we use ? * & or all those things, they get encoded properly



//Routes

//This will redirect when going to home, i will be sent to form-with-get
app.get('/', function(req,res){
    return res.redirect('/form-with-get')
})

//This will render the form-with-get, which will find the file in the view directory
app.get('/form-with-get',function(req,res){
    return res.render('form-with-get.pug')//This boiler plate pug file will render
})

//This will render the form-with-post. we can use app.get to render the pug file
app.get('/form-with-post', function(req,res){
    return res.render('form-with-post')
})


//THIS IS THE RESULT OF SUBMITTING THE form-with-get
app.get('/submit-form-with-get',function(req,res){
    return res.send(req.query)
        //In here, because its get, we use the query...in post we'll use .body
})

//THIS IS THE ROUTE THAT WILL HANDLE THE POST REQUEST
app.post('/submit-form-with-post',function(req,res){
    return res.send(req.body   )
})





app.listen(port, function(err){
    if(err){
        console.log('This is the error: ' +err)
    }else{
        console.log('running at port ' + port)
    }
})
