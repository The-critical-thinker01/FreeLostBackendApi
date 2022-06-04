const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fredy:Devesky123@cluster0.tvkw4.mongodb.net/freelost?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('connecter a la base de donnee');
    }).catch(err => {
        console.log(err);
    })