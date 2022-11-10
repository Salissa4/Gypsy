const router = require('express').Router();
const userRoutes = require('./userRoutes');
const markerRoutes = require('./markerRoutes');
// const --
// TODO: Are Map routes needed?

router.use('/user', userRoutes);
router.use('/markers', markerRoutes);
// router.use('--', --);
// TODO: router.use Map Routes?

module.exports = router;
