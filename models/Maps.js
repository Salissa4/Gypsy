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
    name: { // City Name gathered from coordinates?
        type: DataTypes.STRING,
        allowNull: false
    },
    map_coordinates: {
        type: DataTypes.GEOGRAPHY('POINT'),
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
