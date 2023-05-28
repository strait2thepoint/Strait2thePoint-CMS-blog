const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const postRoutes = require('../later/postRoutes.js');
const commentRoutes = require('../later/commentRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

//This file we have userRoutes, postRoutes and commentRoutes (whose pathways updated when I moved the files, apparently).  These files will be used to determine which routes are viewing end points on the handlebars.
