'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('encounters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      enc_date: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.STRING
      },
      enc_method: {
        type: Sequelize.STRING
      },
      enc_reason: {
        type: Sequelize.STRING
      },
      reencounter: {
        type: Sequelize.BOOLEAN
      },
      relocated: {
        type: Sequelize.BOOLEAN
      },
      biologist: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.TEXT
      },
      folder_url: {
        type: Sequelize.STRING
      },
      qaqc_flag: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      trusted: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      loc_id: {
        type: Sequelize.INTEGER
      },
      animal_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'animals',
            key: 'id'
        }
      },
      rel_loc_id: {
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
    return queryInterface.dropTable('encounters');
  }
};
