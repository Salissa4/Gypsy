/* eslint-disable camelcase */
const router = require('express').Router();
const { Maps } = require('../../../models');

router.get('/', async (req, res) => {
  try {
    const allMapData = await Maps.findAll({});
    res.status(200).json(allMapData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:city_name', async (req, res) => {
  try {
    const mapData = await Maps.findOne({
      where: req.params,
    });
    res.status(200).json(mapData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/default', async (req, res) => {
  try {
    const defaultMapData = await Maps.findOne({
      where: { city_name: 'DEFAULT' },
    });
    console.log(defaultMapData);
    res.status(200).json(defaultMapData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newMap = await Maps.create({
      city_name: req.body.city_name,
      city_state: req.body.city_state,
      map_coordinates_lat: req.body.map_coordinates_lat,
      map_coordinates_lon: req.body.map_coordinates_lon,
    });
    res.status(200).json(newMap);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
