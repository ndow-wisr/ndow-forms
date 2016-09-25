'use strict';
module.exports = function(sequelize, DataTypes) {
    var Abundance = sequelize.define('Abundance', {
        n_female: DataTypes.INTEGER,
        n_male: DataTypes.INTEGER,
        n_unk_sex: DataTypes.INTEGER,
        n_adult: DataTypes.INTEGER,
        n_young: DataTypes.INTEGER,
        n_unk_age: DataTypes.INTEGER,
        sex_total: DataTypes.INTEGER,
        age_total: DataTypes.INTEGER,
        n_total: DataTypes.INTEGER,
        young_age_class: DataTypes.STRING,
        encounter_id: DataTypes.INTEGER
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'abundance',
        classMethods: {
            associate: function(models) {
                Abundance.belongsTo(models.Encounter);
            }
        }
    });
    return Abundance;
};
