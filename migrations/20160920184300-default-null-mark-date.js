'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
        'marks',
        'mark_removed',
        {
            type: Sequelize.DATEONLY,
            allowNull: true,
            defaultValue: null
        }
    );
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.changeColumn(
          'marks',
          'mark_removed',
          {
              type: Sequelize.DATEONLY
          }
      );
  }
};
