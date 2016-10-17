'use strict';
module.exports = function(sequelize, DataTypes) {
  var Injury = sequelize.define('Injury', {
    injury_type: DataTypes.STRING,
    injury_location: DataTypes.STRING,
    injury_description: DataTypes.TEXT,
    injury_treatment: DataTypes.TEXT,
    encounter_id: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'injuries',
    classMethods: {
      associate: function(models) {
      Injury.belongsTo(models.Encounter);
      }
    }
  });
  return Injury;
};
