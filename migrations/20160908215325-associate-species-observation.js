'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn(
          'observations',
          'species_code',
          {
              type: Sequelize.INTEGER,
              references: {
                  model: 'species',
                  key: 'id'
              }
          }
      )
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn(
          'observations',
          'species_code'
      );
  }
};
