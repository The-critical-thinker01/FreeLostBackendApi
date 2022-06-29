const router = require('express').Router();
const { sessionCreate ,signout,googleAuth,googleAuthCb} = require('../controllers/auth.controller');


router.post('/signin', sessionCreate);
router.get('/signout', signout);
router.get('/google', googleAuth);
router.get('/google/cb', googleAuthCb);


router.get('/sucessRed',(req,res)=>{
    res.json({
        "user":req.user
    })
})
router.get('failureRed',(req,res)=>{
    res.json({
        "erreur":"na pas pu acceder au compte"
    })
})

module.exports = router;