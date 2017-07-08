'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'UserTodos',
        'createdAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      ), queryInterface.addColumn(
        'UserTodos',
        'updatedAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      )
    ];
  },

  down: function(queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('UserTodos','createdAt'),
       queryInterface.removeColumn('UserTodos',
      'createdAt')];
  }
};
