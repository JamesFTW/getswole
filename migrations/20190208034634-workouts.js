'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workouts', {
      workoutid: {
        type: Sequelize.STRING,
        allowNull: false
      },
      workoutname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      workouttype: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('workouts')
  }
};
