const router = require('express').Router();
const express = require('express');
const { userList } = require('../controllers/user.controller');
const { addNewObject, getObjects, getObjectWithID, UpdateObject } = require('../controllers/object.controller');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const catRoutes = require('./cat.routes');



router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/category',catRoutes);

router.get('/',(req,res)=>{
    res.render('index');
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