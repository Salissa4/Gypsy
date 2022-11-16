const router = require('express').Router();

const homeRoutes = require('./root/homeRoutes');
const apiRoutes = require('./api');
// const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
