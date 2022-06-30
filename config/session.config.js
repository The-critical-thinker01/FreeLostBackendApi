const session = require('express-session');
const MongoStore = require('connect-mongo');
const { app } = require('../app');

app.use(
    session({
        secret: 'FreeLost237',
        resave: false,
        name: 'idSession',
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 14, // le cookies du client se deduit apres 14 jours de non utilisation
        },
        store: MongoStore.create({
            mongoUrl: 'mongodb+srv://fredy:Devesky123@cluster0.tvkw4.mongodb.net/freelost?retryWrites=true&w=majority',
            ttl: 60 * 60 * 24 * 14, //la session est detruite apres 14 jours de non utilisation
            // clientPromise: clientPromise.then((m) => m.connection.getClient())  ,
        }),
    })
);