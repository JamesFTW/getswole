'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usercompletedworkouts', {
      userid: {
        type: Sequelize.UUID,
        foreignKey: true,
        allowNull: false
      },
      workoutid: {
        type: Sequelize.STRING,
        foreignKey: true
      },
      createat: {
        type: Sequelize.DATE
      },
      updateat: {
        type: Sequelize.DATE
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usercompletedworkouts')
  }
};
