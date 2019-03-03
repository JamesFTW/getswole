'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workoutplans', {
      planid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
        allowNull: false
      },
      planname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      length: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      workoutids: {
        type: Sequelize.ARRAY(Sequelize.UUID),
        allowNull: false
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('workoutplans')
  }
};