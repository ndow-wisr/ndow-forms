'use strict';
module.exports = function(sequelize, DataTypes) {
    var Species = sequelize.define('Species', {
        common_name: DataTypes.STRING,
        species_name: DataTypes.STRING,
        taxo_class: DataTypes.STRING,
        subspecies: DataTypes.STRING,
        eng_class: DataTypes.STRING,
        eng_subclass: DataTypes.STRING,
        species_code: DataTypes.INTEGER,
        state_status: DataTypes.STRING,
        sensitive: DataTypes.BOOLEAN,
        sensitive_rationale: DataTypes.STRING
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'species',
        classMethods: {
            associate: function(models) {
                Species.hasMany(models.Observation)
            }
        }
    });
    return Species;
};
