const router = require('express').Router();
const userRoutes = require('./userRoutes');
const markerRoutes = require('./markerRoutes');
const mapsRoutes = require('./mapsRoutes');


router.use('/users', userRoutes);
router.use('/markers', markerRoutes);
router.use('/maps', mapsRoutes);
// TODO: router.use Map Routes?

module.exports = router;
