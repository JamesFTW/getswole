'use strict';
//email and password allownull for now.
//twitter api response doesn't send email unless
//I have a terms & services
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('users', {
          username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          email: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
          },
          password: {
            type: Sequelize.STRING,
            allowNull: true
          },
          profilephoto: {
            type: Sequelize.STRING,
            allowNull: true
          },
          bio: {
            type: Sequelize.STRING,
            allowNull: true
          },
          userid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
            primaryKey: true,
            allowNull: false
          },
          twitterid: {
            type: Sequelize.INTEGER
          }
        })
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
