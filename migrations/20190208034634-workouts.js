'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workouts', {
      workoutid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
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