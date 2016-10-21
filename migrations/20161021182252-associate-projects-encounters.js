'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('encounters', 'project_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'projects',
        key: 'id'
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('encounters', 'project_id');
  }
};
