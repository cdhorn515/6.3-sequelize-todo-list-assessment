var models = require('../models');

'use strict';


module.exports = {
  up: function (queryInterface, Sequelize) {
    //get all ids where userid is null
    //update todos to have default userId of 1
    models.Todo.findAll({
      where: {
        userId: null
      }
    }).then(function(todos){
      todos.forEach(function(todo) {
        todo.userId = 1;
        todo.save();
      });
    });
  },

  down: function (queryInterface, Sequelize) {

  }
};
