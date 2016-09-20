'use strict';
module.exports = function(sequelize, DataTypes) {
    var Mark = sequelize.define('Mark', {
        mark_type: DataTypes.STRING,
        mark_id: DataTypes.STRING,
        mark_color: DataTypes.STRING,
        mark_location: DataTypes.STRING,
        date_given: DataTypes.DATEONLY,
        mark_removed: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: null
        },
        mark_on_animal: DataTypes.BOOLEAN,
        animal_id: DataTypes.INTEGER
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'marks',
        classMethods: {
            associate: function(models) {
                Mark.belongsTo(models.Animal);
            }
        }
    });
    return Mark;
};
