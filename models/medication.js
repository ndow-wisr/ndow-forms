'use strict';
module.exports = function(sequelize, DataTypes) {
  var Medication = sequelize.define('Medication', {
    medication: DataTypes.STRING,
    med_dose: DataTypes.REAL,
    med_unit: DataTypes.STRING,
    med_method: DataTypes.STRING,
    med_time_admin: DataTypes.TIME,
    med_notes: DataTypes.STRING,
    encounter_id: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'medications',
    classMethods: {
      associate: function(models) {
        Medication.belongsTo(models.Encounter);
      }
    }
  });
  return Medication;
};
