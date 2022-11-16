const router = require('express').Router();
const userRoutes = require('./user/userRoutes');
const markerRoutes = require('./markers/markerRoutes');
const mapsRoutes = require('./maps/mapsRoutes');

router.use('/users', userRoutes);
router.use('/markers', markerRoutes);
router.use('/maps', mapsRoutes);

module.exports = router;
