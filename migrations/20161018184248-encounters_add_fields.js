'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('encounters', 'marks', { type: Sequelize.STRING(3) })
      .then(queryInterface.addColumn('encounters', 'biometrics', { type: Sequelize.STRING(3) }))
      .then(queryInterface.addColumn('encounters', 'vitals', { type: Sequelize.STRING(3) }))
      .then(queryInterface.addColumn('encounters', 'injuries', { type: Sequelize.STRING(3) }))
      .then(queryInterface.addColumn('encounters', 'medications', { type: Sequelize.STRING(3) }))
      .then(queryInterface.addColumn('encounters', 'samples', { type: Sequelize.STRING(3) }))
      .then(queryInterface.addColumn('encounters', 'source', { type: Sequelize.STRING }));
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('encounters', 'marks')
      .then(queryInterface.removeColumn('encounters', 'biometrics'))
      .then(queryInterface.removeColumn('encounters', 'vitals'))
      .then(queryInterface.removeColumn('encounters', 'injuries'))
      .then(queryInterface.removeColumn('encounters', 'medications'))
      .then(queryInterface.removeColumn('encounters', 'samples'))
      .then(queryInterface.removeColumn('encounters', 'source'));
  }
};
