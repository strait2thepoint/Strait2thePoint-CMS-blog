const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

//in this file we branch off into two different routes, homeRoutes and apiRoutes.  From there we can branch into the various pathways of our website.  
