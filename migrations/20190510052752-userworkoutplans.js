'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userworkoutplans', {
      userid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "userid"
        }
      },
      workoutid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "workouts",
          key: "workoutid"
        }
      },
      createdat: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      endat: {
        type: Sequelize.DATE
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userworkoutplans')
  }
};