'use strict';
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        user_role: {
            type: DataTypes.STRING,
            defaultValue: 'public'
        },
        division: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'users',
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Observation);
                User.hasMany(models.Animal);
            }
        }
    });
    return User;
};
