const router = require('express').Router();
const express = require('express');
const { userList } = require('../controllers/user.controller');
const { addNewObject } = require('../controllers/object.controller');


router.get('/', (req, res) => {
    res.render('home');
})
router.get('/users', userList);

router.get('/Objects', (req, res) => {
    res.send('Demande Get avec succes')
});
router.post('/Objects/create', addNewObject);

router.put('/Objects/:Objectid', (req, res) => {
    res.send('Demande put avec succes')
});
router.delete('/Objects/:Objectid', (req, res) => {
    res.send('Demande delete avec succes')
});



module.exports = router;