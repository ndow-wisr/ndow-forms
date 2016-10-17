'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('medications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      medication: {
        type: Sequelize.STRING
      },
      med_dose: {
        type: Sequelize.REAL
      },
      med_unit: {
        type: Sequelize.STRING
      },
      med_method: {
        type: Sequelize.STRING
      },
      med_time_admin: {
        type: Sequelize.TIME
      },
      med_notes: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('medications');
  }
};
