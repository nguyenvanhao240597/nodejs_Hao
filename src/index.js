const path = require('path');
const express = require('express');
const app = express();
var  handlebars = require('express-handlebars');
//const handlebars = require('express-handlebars');
const port = 3000;
var morgan = require('morgan');

const fs = require('fs');

//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars',handlebars());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    

    res.render('home')
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})