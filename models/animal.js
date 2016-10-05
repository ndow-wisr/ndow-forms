'use strict';
module.exports = function(sequelize, DataTypes) {
    var Animal = sequelize.define('Animal', {
        field_id: DataTypes.STRING,
        status: DataTypes.STRING, // TODO: remove from this model (in encounter)
        source: DataTypes.STRING, // TODO: remove from this model (in encounter)
        species_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER, // TODO: remove from this model (in encounter)
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
