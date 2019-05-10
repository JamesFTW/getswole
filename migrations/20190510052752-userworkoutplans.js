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
      planid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "workoutplans",
          key: "planid"
        }
      },
      createdat: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endat: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userworkoutplans')
  }
};