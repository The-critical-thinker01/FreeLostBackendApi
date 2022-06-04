const express = require('express');
const app = express();
const morgan = require('morgan');
const index = require('./routes');
require('./database');
const path = require('path');

//juste une vue pour la page home de notre api,
//pour faire une petite doc
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(morgan('short'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(index);

app.listen(3005);