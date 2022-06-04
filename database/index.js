const mongoose = require('mongoose');

mongoose.connect('mongodb://fredy:fredy@94.176.234.8:27017/freelost', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('conected');
    }).catch(err => {
        console.log(err);
    })