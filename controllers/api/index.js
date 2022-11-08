const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const --

router.use('/user', userRoutes);
// router.use('--', --);

module.exports = router;