const router = require('express').Router();
const { userCreate } = require('../controllers/user.controller');

router.post('/new', userCreate);


module.exports = router;