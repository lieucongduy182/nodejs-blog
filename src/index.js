const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

// Connect Database
const db = require('./config/db');
db.connect();

const app = express();
const port = 3000;

const router = require('./routes');

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    })
); // form data
app.use(express.json()); // code javascript client

// static files server
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan('combined'));

// Template engine handlebars
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Router init
router(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
