// Imports Express, Blog Model, and withAuth helper function
const router = require("express").Router();
const { User, Marker } = require("../../../models");
const withAuth = require("../../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const allMarkers = await Marker.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [
        "id",
        "name",
        "description",
        "marker_coordinates_lat",
        "marker_coordinates_lon",
        "date_created",
        "map_id",
      ],
      include: {
        model: User,
        attributes: ["name"],
      },
    });
    res.status(200).json(allMarkers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:map_id", withAuth, async (req, res) => {
  try {
    const markersPerCity = await Marker.findAll({
      where: { map_id: req.params.map_id, user_id: req.session.user_id },
    });
    res.status(200).json(markersPerCity);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:map_id", withAuth, async (req, res) => {
  try {
    const newMarker = await Marker.create({
      name: req.body.name,
      description: req.body.description,
      marker_coordinates_lat: req.body.marker_coordinates_lat,
      marker_coordinates_lon: req.body.marker_coordinates_lon,
      map_id: req.params.map_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(newMarker);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Deletes Existing map marker by ID
// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const markerData = await Marker.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!markerData) {
//       res.status(404).json({ message: "No map marker found with this id!" });
//       return;
//     }

//     res.status(200).json(markerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
