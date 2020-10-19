'use strict';

// import { STRING } from "sequelize/types";

module.exports = (sequelize, DataTypes) => {
  const accident = sequelize.define('accident', {
    date: DataTypes.DATE,
     police_force:DataTypes.STRING,
    age_of_driver:DataTypes.INTEGER,
    sex_of_driver:DataTypes.STRING,
    vehicle_manoeuvre:DataTypes.STRING,
    engine_capacity:DataTypes.FLOAT,
    road_type:DataTypes.STRING,  
    light_condition:DataTypes.STRING,
    weather_main:DataTypes.STRING,
    temp:DataTypes.FLOAT,
    pressure:DataTypes.FLOAT,
    humidity:DataTypes.FLOAT,
    visibility:DataTypes.FLOAT,
    wind_speed:DataTypes.FLOAT,
    rain:DataTypes.FLOAT,
    clouds:DataTypes.FLOAT,
    speed_limt:DataTypes.INTEGER,
    casualty_class:DataTypes.STRING,
    latitude:DataTypes.FLOAT,
    longitude:DataTypes.FLOAT,
    number_of_vehicle:DataTypes.INTEGER,
    junction_detail:DataTypes.STRING,
    junction_control:DataTypes.STRING,
    special_condition_on_site:DataTypes.STRING,
    vehicle_propelsion_code:DataTypes.STRING,
    casualty_type:DataTypes.STRING,
    vehicle_type:DataTypes.STRING,
    region:DataTypes.STRING,
    zone:DataTypes.STRING,
    wereda:DataTypes.STRING,
    death:DataTypes.INTEGER,
    slight__injury:DataTypes.INTEGER,
    medium_injury:DataTypes.INTEGER,
    action_taked:DataTypes.STRING,
    cause_of_accident:DataTypes.STRING,
    fatal_injury:DataTypes.INTEGER,
    property_injury:DataTypes.FLOAT,
    age_of_vehicle:DataTypes.FLOAT,
    cord_latitude:DataTypes.FLOAT,
    cord_longitude:DataTypes.FLOAT,    
    city:DataTypes.STRING
  
  }, {});
  accident.associate = function(models) {
    // associations can be defined here
  };
  return accident;
};