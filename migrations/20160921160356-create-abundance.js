'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('abundance', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      n_female: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      n_male: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      n_unk_sex: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      n_adult: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      n_young: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      n_unk_age: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      sex_total: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      age_total: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      n_total: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      young_age_class: {
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
    return queryInterface.dropTable('abundance');
  }
};
