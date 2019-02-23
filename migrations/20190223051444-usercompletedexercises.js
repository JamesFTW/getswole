'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usercompletedexercises', {
      userid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "userid"
        }
      },
      exerciseid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "exercises",
          key: "exerciseid"
        }
      },
      weightused: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usercompletedexercises')
  }
};