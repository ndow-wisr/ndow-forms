'use strict';
module.exports = function(sequelize, DataTypes) {
    var Observation = sequelize.define('Observation', {
        date: DataTypes.DATEONLY,
        species: DataTypes.STRING,
        female: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        male: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        sex_unk: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        adult: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        young: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        age_unk: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        total: DataTypes.INTEGER,
        young_class: DataTypes.STRING,
        status: DataTypes.STRING,
        source: DataTypes.STRING,
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
                Observation.belongsTo(models.Species, {
                    foreignKey: 'species_code'
                })
            }
        }
    });
    return Observation;
};
