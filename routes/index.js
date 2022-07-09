<<<<<<< HEAD
const router = require("express").Router();
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
=======
const router = require('express').Router();
const express = require('express');
const { userList } = require('../controllers/user.controller');
const { addNewObject, getObjects, getObjectWithID, UpdateObject, deleteObject } = require('../controllers/object.controller');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const catRoutes = require('./cat.routes');
>>>>>>> e7e2e00c2e351a051a8b02c3de246c78641d0685

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.render("index");
});

<<<<<<< HEAD
module.exports = router;
=======
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/category',catRoutes);

router.get('/',(req,res)=>{
    res.render('index');
})


router.get('/Objects', (req, res, next) => {
    next();
}, getObjects);
router.post('/Object', addNewObject);

// Objet avec ID
router.get('/Object/:ObjectId', getObjectWithID);
// mise a jour
router.put('/Object/:ObjectId', UpdateObject);
// suppression
router.delete('/Object/:ObjectId', deleteObject);



module.exports = router;
>>>>>>> e7e2e00c2e351a051a8b02c3de246c78641d0685
