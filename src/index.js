const path = require('path');
const express = require('express');

const handlebars = require('express-handlebars');
//const { engine } = require ('express-handlebars');
//const handlebars = require('express-handlebars');
const port = 3000;
var morgan = require('morgan');
const app = express();
const fs = require('fs');

//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    

    res.render('home')
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})