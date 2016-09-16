'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn(
          'animals',
          'field_id',
          {
              type: Sequelize.STRING
          }
      );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
        'animals',
        'field_id'
    );
  }
};
