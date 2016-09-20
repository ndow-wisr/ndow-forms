'use strict';
module.exports = function(sequelize, DataTypes) {
    var Animal = sequelize.define('Animal', {
        field_id: DataTypes.STRING,
        status: DataTypes.STRING,
        source: DataTypes.STRING,
        species_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        sex: DataTypes.STRING
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'animals',
        classMethods: {
            associate: function(models) {
                Animal.belongsTo(models.User);
                Animal.belongsTo(models.Species);
                Animal.hasMany(models.Encounter);
                Animal.hasMany(models.Mark);
            }
        }
    });
    return Animal;
};
