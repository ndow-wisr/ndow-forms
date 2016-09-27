'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loc_name: {
        type: Sequelize.STRING
      },
      loc_type: {
        type: Sequelize.STRING
      },
      loc_easting: {
        type: Sequelize.INTEGER
      },
      loc_northing: {
        type: Sequelize.INTEGER
      },
      loc_lat: {
        type: Sequelize.REAL
      },
      loc_lon: {
        type: Sequelize.REAL
      },
      loc_accuracy: {
        type: Sequelize.INTEGER
      },
      loc_quality: {
        type: Sequelize.STRING
      },
      loc_source: {
        type: Sequelize.STRING
      },
      loc_mtn_range: {
        type: Sequelize.STRING
      },
      loc_hunt_unit: {
        type: Sequelize.INTEGER
      },
      loc_mgmt_area: {
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
    return queryInterface.dropTable('locations');
  }
};
