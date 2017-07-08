'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    due_date: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN,
    assignee: DataTypes.STRING
  }, {});



  return Todo;
};
