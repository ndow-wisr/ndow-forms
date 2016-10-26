'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('encounters', 'capture_time', { type: Sequelize.TIME })
      .then(queryInterface.addColumn('encounters', 'arrival_time', { type: Sequelize.TIME }))
      .then(queryInterface.addColumn('encounters', 'finish_time', { type: Sequelize.TIME }))
      // .then(queryInterface.addColumn('encounters', 'chase_time', { type: Sequelize.INTEGER }))
      .then(queryInterface.addColumn('samples', 'sample_notes', { type: Sequelize.TEXT }));
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('encounters', 'capture_time')
      .then(queryInterface.removeColumn('encounters', 'arrival_time'))
      .then(queryInterface.removeColumn('encounters', 'finish_time'))
      // .then(queryInterface.removeColumn('encounters', 'chase_time'))
      .then(queryInterface.removeColumn('samples', 'sample_notes'))
  }
};
