const router = require('express').Router();
const { User, Marker, Maps } = require('../../models');

router.get('/api/maps', async (req, res) => {
    try {
      const mapRendering = await Maps.findAll({});
      const mapMarkers = await Marker.findAll({});
      const mapData = [ ...mapMarkers, ...mapRendering];
      res.status(200).json(mapData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/api/maps/:id', async (req, res) => {
    try {
        const mapData = await Maps.findOne({});
        

    } catch (err) {
        res.status(500).json(err);
    }
  });