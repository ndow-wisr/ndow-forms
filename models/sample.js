'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sample = sequelize.define('Sample', {
    sample: DataTypes.STRING,
    sample_destination: DataTypes.STRING,
    sample_test: DataTypes.STRING,
    sample_results: DataTypes.STRING,
    encounter_id: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'samples',
    classMethods: {
      associate: function(models) {
        Sample.belongsTo(models.Encounter);
      }
    }
  });
  return Sample;
};
