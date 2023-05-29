const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        // url: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // }, 
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true, //??? I think this will stamp the blog post with a time that it was posted
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;

