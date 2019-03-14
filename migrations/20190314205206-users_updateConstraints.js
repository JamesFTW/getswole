'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'email', {  
      type: Sequelize.STRING,
      unique: true 
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
      allowNull: false,
      unique: true
    })
    .then(() => {
      return queryInterface.changeColumn('users', 'password', {
        type: Sequelize.STRING,
        allowNull: false
      })
    })
  }
};
