const router = require('express').Router();
const { sessionCreate } = require('../controllers/auth.controller');

router.post('/signin', sessionCreate);

module.exports = router;