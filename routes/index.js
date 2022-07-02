const router = require('express').Router();
const express = require('express');
const { userList } = require('../controllers/user.controller');
const { addNewObject, getObject } = require('../controllers/object.controller');


router.get('/', (req, res) => {
    res.render('home');
})
router.get('/users', userList);

router.get('/Objects', (req, res, next) => {
    next();
}, getObject);
router.post('/Objects', addNewObject);

router.put('/Objects/:Objectid', (req, res) => {
    res.send('Demande put avec succes')
});
router.delete('/Objects/:Objectid', (req, res) => {
    res.send('Demande delete avec succes')
});



module.exports = router;