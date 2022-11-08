const User = require('./User');
const Marker = require('./Marker');
const Maps = require('./Maps');

User.hasMany(Marker, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Marker.belongsTo(User, {
    foreignKey: 'user_id'
});

Maps.hasMany(Marker, {
    foreignKey: 'map_id'
});

module.exports = { User, Marker };