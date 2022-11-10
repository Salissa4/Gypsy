// Imports Express, Blog Model, and withAuth helper function
const router = require('express').Router();
const { User, Marker } = require('../../models');
const withAuth = require('../../utils/auth');

// {
//   id: 1,
//     name: Bobs_Burgers,
//     description: Best burgers in town,
//     lat: 35.896,
//     lon: -97.985,
//     date_created: 12 / 31 / 2022,
//       map_id: req.params.map_id
// }

// await fetch('/api/maps/Austin');
// await fetch(`/api/markers/${mapData.id}/${req.session.user_id}`);

router.post('/:map_id', async (req, res) => {
  try {
    const newMarker = await Marker.create({
      name: req.body.name,
      description: req.body.description,
      marker_coordinates_lat: req.body.marker_coordinates_lat,
      marker_coordinates_lon: req.body.marker_coordinates_lon,
      map_id: req.params.map_id,
    });
    res.status(200).json(newMarker);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const markerData = await Marker.findAll({
//       attributes: ['id', 'name', 'description', 'coordinates', 'created_at'],
//       order: [['created_at', 'DESC']],
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//         {
//           model: Maps,
//           attributes: ['id', 'name', 'map_coordinates'],

//         },
//       ],
//     });
//     res.status(200).json(markerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Creates new map marker with given request body
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newMarker = await Marker.create({
//         name: req.body.name,
//       description: req.body.description,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newMarker);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // Edits map marker existing blog post by ID
// // TODO: Implement coordinates?
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedMarker = await Marker.update(
//       { name: req.body.name, description: req.body.description },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     res.status(200).json(updatedMarker);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const markerData = await Marker.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: ['id', 'name', 'description', 'coordinates', 'date_created'],
//       include: [
//         { model: User, attributes: ['name'] },
//         {
//             model: Maps,
//             attributes: ['id', 'name', 'map_coordinates'],
//             include: { model: User, attributes: ['username']}
//         }
//       ],
//     });
//     res.status(200).json(markerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Deletes Existing map marker by ID
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const markerData = await Marker.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!markerData) {
//       res.status(404).json({ message: 'No map marker found with this id!' });
//       return;
//     }

//     res.status(200).json(markerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
