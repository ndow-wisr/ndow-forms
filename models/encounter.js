'use strict';
module.exports = function(sequelize, DataTypes) {
    var Encounter = sequelize.define('Encounter', {
        enc_date: DataTypes.DATEONLY,
        status: DataTypes.STRING,
        enc_method: DataTypes.STRING,
        enc_reason: DataTypes.STRING,
        reencounter: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        relocated: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        biologist: DataTypes.STRING,
        comments: DataTypes.TEXT,
        folder_url: DataTypes.STRING,
        qaqc_flag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        trusted: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        loc_id: DataTypes.INTEGER,
        animal_id: DataTypes.INTEGER,
        rel_loc_id: DataTypes.INTEGER
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'encounters',
        classMethods: {
            associate: function(models) {
                Encounter.belongsTo(models.Animal)
            }
        }
    });
    return Encounter;
};
