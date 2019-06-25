'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('workoutexercises', 'sets', {
      type: Sequelize.INTEGER
    }).then(() => {
      return queryInterface.addColumn('workoutexercises', 'reps', {
        type: Sequelize.INTEGER
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('workoutexercises', 'sets')
    .then(() => {
      return queryInterface.removeColumn('workoutexercises', 'reps')
    })
  }
};
