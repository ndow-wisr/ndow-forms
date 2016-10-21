'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      proj_name: {
        type: Sequelize.STRING
      },
      proj_desc: {
        type: Sequelize.TEXT
      },
      proj_target: {
        type: Sequelize.TEXT
      },
      proj_goals: {
        type: Sequelize.TEXT
      },
      proj_status: {
        type: Sequelize.STRING
      },
      proj_owner: {
        type: Sequelize.STRING
      },
      proj_division: {
        type: Sequelize.STRING
      },
      proj_start: {
        type: Sequelize.DATEONLY
      },
      proj_end: {
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('projects');
  }
};
