'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'email', {  
      type: Sequelize.STRING 
    })
    .then(() => {
      return queryInterface.changeColumn('users', 'password', {
        type: Sequelize.STRING
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: false
    })
    .then(() => {
      return queryInterface.changeColumn('users', 'password', {
        type: Sequelize.STRING,
        allowNull: false
      })
    })
  }
};
