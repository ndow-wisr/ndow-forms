'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.changeColumn(
          'encounters',
          'loc_id',
          {
              type: Sequelize.INTEGER,
              references: {
                  model: 'locations',
                  key: 'id'
              }
          }
      )
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.changeColumn(
          'encounters',
          'loc_id',
          {
              type: Sequelize.INTEGER
          }
      )
  }
};
