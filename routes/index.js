const router = require('express').Router();
const express = require('express');
const { userList } = require('../controllers/user.controller');
const { addNewObject, getObjects, getObjectWithID, UpdateObject } = require('../controllers/object.controller');


router.get('/', (req, res) => {
    res.render('home');
})
router.get('/users', userList);

router.get('/Objects', (req, res, next) => {
    next();
}, getObjects);
router.post('/Objects', addNewObject);

// contact avec ID
router.get('/Objects/:ObjectId', getObjectWithID);
// mise a jour
router.put('/Objects/:ObjectId', UpdateObject);
router.delete('/Objects/:Objectid', (req, res) => {
    res.send('Demande delete avec succes')
});



module.exports = router;