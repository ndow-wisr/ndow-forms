'use strict';
module.exports = function(sequelize, DataTypes) {
    var Biometric = sequelize.define('Biometric', {
        biometric: DataTypes.STRING,
        measurement: DataTypes.REAL,
        unit: DataTypes.STRING,
        biom_notes: DataTypes.STRING,
        encounter_id: DataTypes.INTEGER
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'biometrics',
        classMethods: {
            associate: function(models) {
                Biometric.belongsTo(models.Encounter);
            }
        }
    });
    return Biometric;
};
