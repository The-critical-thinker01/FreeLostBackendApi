const router = require('express').Router();
const { userList } = require('../controllers/user.controller');
const {objectList } = require('../controllers/object.controller');

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/users', userList);
router.get('/objects', objectList);


module.exports = router;