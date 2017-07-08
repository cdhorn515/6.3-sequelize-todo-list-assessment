'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  User.associate = function(models){
    User.hasMany(models.Todo, {as: 'todos', foreignKey: 'userId'});
//many to many--should establish on both sides
    User.belongsToMany(models.Todo, {as: 'Following', through: 'UserTodos', foreignKey: 'todoId', otherKey: 'userId'});

  };

  return User;
};
