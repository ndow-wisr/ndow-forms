'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('vitals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vital_time_recorded: {
        type: Sequelize.TIME
      },
      vital_measurement: {
        type: Sequelize.STRING
      },
      vital_value: {
        type: Sequelize.REAL
      },
      vital_interval: {
        type: Sequelize.INTEGER
      },
      encounter_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'encounters',
            key: 'id'
        }
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
    return queryInterface.dropTable('vitals');
  }
};
