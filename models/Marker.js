const { Model, DataTypes } = require('sequelize');
require('leaflet');
const sequelize = require('../config/connection');

class Marker extends Model {}

// TODO: Add GeoJSON data field? See Coordinates field
Marker.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    // Add in note/comment from user about map marker to field?
    description: {
        type: DataTypes.STRING
    },
    // Take in Leaflet Cooridnates GeoJSON into field?
    coordinates: {
        type: DataTypes.GEOGRAPHY('POINT'),
        allowNull: false
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    },
    map_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'maps',
            key: 'id'
        }
    }
},
{
     sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'marker',
}
);

module.exports = Marker;
