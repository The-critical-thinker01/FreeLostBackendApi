const router = require('express').Router();
const { sessionCreate ,signout,googleAuth,googleAuthCb,facebookAuth,facebookAuthCb,instagramAuth,instagramAuthCb} = require('../controllers/auth.controller');


router.post('/signin', sessionCreate);
router.get('/signout', signout);
router.get('/google', googleAuth);
router.get('/google/cb', googleAuthCb);
router.get('/facebook', facebookAuth);
router.get('/facebook/callback', facebookAuthCb);
router.get('/instagram', instagramAuth);
router.get('/instagram/callback', instagramAuthCb);


router.get('/sucessRed',(req,res)=>{
    res.json({
        "user":req.user
    })
})
router.get('failureRed',(req,res)=>{
    res.json({
        "erreur":"autorisation non accorder"
    })
})

module.exports = router;