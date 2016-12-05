'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'encounters',
        'user_id',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('encounters', 'user_id');
  }
};
