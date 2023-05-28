const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };


//this is our model for that one user has many projects- which needs to be changed to posts
//project/post belongs to user.  This sets up our tables.