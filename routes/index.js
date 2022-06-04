const router = require('express').Router();
const { userList } = require('../controllers/user.controller');


router.get('/', (req, res) => {
    res.render('home');
})

router.get('/users', userList);


module.exports = router;