const router = require('express').Router();
const dashboardRoutes = require('./dashboard-route.js');
const apiRoutes = require('./api/index');
const homeRoutes = require('./home-route.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;