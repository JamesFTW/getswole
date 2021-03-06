'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usercompletedworkouts', {
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
      weightused: {
        type: Sequelize.STRING,
      },
      createdat: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usercompletedworkouts')
  }
};