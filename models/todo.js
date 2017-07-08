'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    due_date: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN,
    assignee: DataTypes.STRING
  }, {});
    Todo.associate = function(models){
      Todo.belongsTo(models.User, {foreignKey: 'userId'});
      //many to many rel, should est on both sides
      Todo.belongsToMany(models.User, {through: 'UserTodos', foreignKey: 'userId', otherKey: 'todoId'});


  };

  return Todo;
};
