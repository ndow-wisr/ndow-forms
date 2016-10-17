'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('samples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sample: {
        type: Sequelize.STRING
      },
      sample_destination: {
        type: Sequelize.STRING
      },
      sample_test: {
        type: Sequelize.STRING
      },
      sample_results: {
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
    return queryInterface.dropTable('samples');
  }
};
