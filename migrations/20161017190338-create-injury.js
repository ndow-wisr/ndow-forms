'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('injuries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      injury_type: {
        type: Sequelize.STRING
      },
      injury_location: {
        type: Sequelize.STRING
      },
      injury_description: {
        type: Sequelize.TEXT
      },
      injury_treatment: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('injuries');
  }
};
