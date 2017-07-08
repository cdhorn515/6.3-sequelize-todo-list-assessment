'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('UserTodos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      TodoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Todos',
          key: 'id'
        }
      }
});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.createTable({

    });
  }
};
