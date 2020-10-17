'use strict';
module.exports = (sequelize, DataTypes) => {
  const accident = sequelize.define('accident', {
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    day_of_week: DataTypes.STRING,
    police_force:DataTypes.STRING,
    age_of_driver:DataTypes.INTEGER,
    sex_of_driver:DataTypes.STRING,
    vehicle_manoeuvre:DataTypes.STRING,
    

  }, {});
  accident.associate = function(models) {
    // associations can be defined here
  };
  return accident;
};