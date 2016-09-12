'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn(
          'observations',
          'status',
          {
              type: Sequelize.STRING
          }
      ).then(queryInterface.addColumn(
        'observations',
        'source',
        {
            type: Sequelize.STRING
        }
    ));
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn(
          'observations',
          'status'
      ).then(queryInterface.removeColumn(
          'observations',
          'source'
      ));
  }
};
