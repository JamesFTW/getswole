'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workoutexercises', {
      workoutid: {
        type: Sequelize.STRING,
        foreignKey: true,
        allowNull: false
      },
      exerciseid: {
        type: Sequelize.UUID,
        foreignKey: true,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('workoutexercises')
  }
};
