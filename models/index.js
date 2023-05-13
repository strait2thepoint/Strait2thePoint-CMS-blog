const User = require('./User');
const Blogpost = require('./Blog');

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogpost };

// const router = require('express').Router();

// const apiRoutes = require('./api/');
// const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);

// module.exports = router;