'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('observations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      species: {
        type: Sequelize.STRING
      },
      female: {
        type: Sequelize.INTEGER
      },
      male: {
        type: Sequelize.INTEGER
      },
      sex_unk: {
        type: Sequelize.INTEGER
      },
      adult: {
        type: Sequelize.INTEGER
      },
      young: {
        type: Sequelize.INTEGER
      },
      age_unk: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      young_class: {
        type: Sequelize.STRING
      },
      geo_x: {
        type: Sequelize.REAL
      },
      geo_y: {
        type: Sequelize.REAL
      },
      location: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.TEXT
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
      },
      species_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('observations');
  }
};
