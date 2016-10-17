'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vital = sequelize.define('Vital', {
    vital_time_recorded: DataTypes.TIME,
    vital_measurement: DataTypes.STRING,
    vital_value: DataTypes.REAL,
    vital_interval: DataTypes.INTEGER,
    encounter_id: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'vitals',
    classMethods: {
      associate: function(models) {
        Vital.belongsTo(models.Encounter);
      }
    }
  });
  return Vital;
};
