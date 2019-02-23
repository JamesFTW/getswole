'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workoutexercises', {
      workoutid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "workouts",
          key: "workoutid"
        }
      },
      exerciseid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "exercises",
          key: "exerciseid"
        }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('workoutexercises')
  }
};