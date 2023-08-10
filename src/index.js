const path = require('path');
const express = require('express');

const handlebars = require('express-handlebars');
//const { engine } = require ('express-handlebars');
//const handlebars = require('express-handlebars');
const port = 5000;
var morgan = require('morgan');
const app = express();
const fs = require('fs');
const route = require('./routes/index.route')
//Xem img
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//routes init
route(app);

// app.get('/khoahoc', (req, res) => {    
//     res.render('home')  
// })

// app.get('/newspage', (req, res) => {  
//   res.render('news')
// })

// app.get('/search', (req, res) => {
    

// //console.log(req.query.q)
// res.render('search')
// //res.send()
  
// })

// app.post('/search', (req, res) => {
    

//   //console.log(req.query.q)
//   console.log(req.body);
    
//   })
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})