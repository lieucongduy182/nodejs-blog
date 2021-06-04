const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

// static files server
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))

// router
app.get('/', (req, res) => {
    return res.render('home');
});

app.get('/news', (req, res) => {
  return res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});