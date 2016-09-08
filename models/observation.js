'use strict';
module.exports = function(sequelize, DataTypes) {
    var Observation = sequelize.define('Observation', {
        date: DataTypes.DATEONLY,
        species: DataTypes.STRING,
        female: DataTypes.INTEGER,
        male: DataTypes.INTEGER,
        sex_unk: DataTypes.INTEGER,
        adult: DataTypes.INTEGER,
        young: DataTypes.INTEGER,
        age_unk: DataTypes.INTEGER,
        total: DataTypes.INTEGER,
        young_class: DataTypes.STRING,
        geo_x: DataTypes.REAL,
        geo_y: DataTypes.REAL,
        location: DataTypes.STRING,
        comments: DataTypes.TEXT,
        user_id: DataTypes.INTEGER,
        species_id: DataTypes.INTEGER,
        species_code: DataTypes.INTEGER
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'observations',
        classMethods: {
            associate: function(models) {
                Observation.belongsTo(models.User)
                Observation.belongsTo(models.Species)
            }
        }
    });
    return Observation;
};
