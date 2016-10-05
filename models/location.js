'use strict';
module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define('Location', {
        loc_name: DataTypes.STRING,
        loc_type: DataTypes.STRING,
        loc_easting: DataTypes.INTEGER,
        loc_northing: DataTypes.INTEGER,
        loc_lat: DataTypes.REAL,
        loc_lon: DataTypes.REAL,
        loc_accuracy: DataTypes.INTEGER,
        loc_quality: DataTypes.STRING,
        loc_source: DataTypes.STRING,
        loc_mtn_range: DataTypes.STRING,
        loc_hunt_unit: DataTypes.INTEGER,
        loc_mgmt_area: DataTypes.INTEGER
        // TODO: add loc_description
    }, {
        underscored: true,
        freezeTabelName: true,
        tableName: 'locations',
        classMethods: {
            associate: function(models) {
                Location.hasMany(models.Encounter, {targetKey: 'loc_id'});
            }
        }
    });
    return Location;
};
