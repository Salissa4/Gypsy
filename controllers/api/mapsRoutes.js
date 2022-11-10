/* eslint-disable camelcase */
const router = require('express').Router();
const { Maps } = require('../../models');

router.get('/', async (req, res) => {
  const allMapData = await Maps.findAll({});
  res.status(200).json(allMapData);
});

router.get('/:city_name', async (req, res) => {
  const mapData = await Maps.findOne({
    where: req.params,
  });
  res.status(200).json(mapData);
});

router.post('/', async (req, res) => {
  const newMap = await Maps.create({
    city_name: req.body.city_name,
    city_state: req.body.city_state,
    map_coordinates_lat: req.body.map_coordinates_lat,
    map_coordinates_lon: req.body.map_coordinates_lon,
  });
  res.status(200).json(newMap);
});

module.exports = router;
