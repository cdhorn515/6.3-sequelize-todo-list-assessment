'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Todos',
      'assignee',
      {
        type: Sequelize.STRING,
        defaultValue: 'me',
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Todos', 'assignee', {defaultValue: null}
  );
  }
};
