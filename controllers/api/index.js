const router = require('express').Router();
const userRoutes = require('./userRoutes');
const markerRoutes = require('./markerRoutes');
// const --

router.use('/user', userRoutes);
router.use('/markers', markerRoutes);
// router.use('--', --);

module.exports = router;
