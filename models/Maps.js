const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Maps extends Model {}

Maps.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city_name: { // City Name gathered from coordinates?
        type: DataTypes.STRING,
        allowNull: false
    },
    city_state: { // State Name gathered from coordinates?
        type: DataTypes.STRING,
        allowNull: false
    },
    map_coordinates_lat: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false
    },
    map_coordinates_lon: {
      type: DataTypes.GEOMETRY('POINT'),
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "maps",
  }
);

module.exports = Maps;
