'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    proj_name: DataTypes.STRING,
    proj_desc: DataTypes.TEXT,
    proj_target: DataTypes.TEXT,
    proj_goals: DataTypes.TEXT,
    proj_status: DataTypes.STRING,
    proj_owner: DataTypes.STRING,
    proj_division: DataTypes.STRING,
    proj_start: DataTypes.DATEONLY,
    proj_end: DataTypes.DATEONLY
  }, {
    uderscored: true,
    freezeTableName: true,
    tableName: 'projects',
    classMethods: {
      associate: function(models) {
        Project.hasMany(models.Encounter);
      }
    }
  });
  return Project;
};
