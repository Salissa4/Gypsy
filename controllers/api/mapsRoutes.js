/* eslint-disable camelcase */
const router = require('express').Router();
const { Marker, Maps } = require('../../models');

// router.get('/', async (req, res) => {
//     try {
//       const mapRendering = await Maps.findAll({});
//       const mapMarkers = await Marker.findAll({});
//       const mapData = [ ...mapMarkers, ...mapRendering];
//       res.status(200).json(mapData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//   router.get('/:id', async (req, res) => {
//     try {
//         const mapRendering = await Maps.findOne({});
//         const mapMarkers = await Marker.findAll({});
//         const mapData = [ ...mapMarkers, ...mapRendering];
        
//       res.status(200).json(mapData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });

router.post('/', async (req, res) => {
  try {
    await Maps.create({
      city_name: req.body.city_name,
      city_state: req.body.city_state,
      map_coordinates_lat: req.body.map_coordinates_lat,
      map_coordinates_lon: req.body.map_coordinates_lon
    });
    res.status(200).json(res);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;