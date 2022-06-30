const router = require('express').Router();
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const catRoutes = require('./cat.routes');



router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/categories',catRoutes);

router.get('/',(req,res)=>{
    res.render('index');
})



module.exports = router;