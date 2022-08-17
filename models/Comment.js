const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { };

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: true,
    },  
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commentDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment',
  }
);

module.exports = Comment;