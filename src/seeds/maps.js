const { Maps } = require('../models');

const mapsData = [
    {
        city_name: 'DEFAULT',
        city_state: 'DEFAULT',
        map_coordinates_lat: '31.1957',
        map_coordinates_lon: '-98.7181'
    },
    {
        city_name: 'Austin',
        city_state: 'TX',
        map_coordinates_lat: '30.2672',
        map_coordinates_lon: '-97.7431'
    },
    {
        city_name: 'Houston',
        city_state: 'TX',
        map_coordinates_lat: '29.7604',
        map_coordinates_lon: '-95.3698'
    },
    {
        city_name: 'Dallas',
        city_state: 'TX',
        map_coordinates_lat: '32.7767',
        map_coordinates_lon: '-96.7970'
    },
];

const seedMaps = () => Maps.bulkCreate(mapsData);
module.exports = seedMaps;