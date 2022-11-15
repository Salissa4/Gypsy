/* eslint-disable no-restricted-syntax */
// Gets City Buttons by ID
const austin = document.getElementById('austin');
const houston = document.getElementById('houston');
const dallas = document.getElementById('dallas');
const addMarkerButton = document.getElementById('add-marker');

let mapData;
let map;

// Renders Map Tile with Leaflet.js Library with Default Zoom
const renderMapData = (lat, lon, zoom = 5.5) => {
  if (map) map.remove();
  map = L.map('map').setView([lat, lon], zoom);

  const googleStreets = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
  );
  googleStreets.addTo(map);

  // Working function to double click to place marker on map and get coordinate data
  // map.on('dblclick', (e) => {
  //   L.marker(e.latlng).addTo(map);
  //   document.getElementsByClassName('coordinate')[0].innerHTML =
  //     e.latlng.lat + e.latlng.lng;
  //   console.log(e.latlng.lat, e.latlng.lng);
  // });
};

const init = async () => {
  let initialMapData = await fetch('/api/maps/default');
  let { map_coordinates_lat, map_coordinates_lon } =
    await initialMapData.json();

  renderMapData(map_coordinates_lat, map_coordinates_lon);
};

const renderMapMarkers = (markers) => {
  for (let mark of markers) {
    let marker = new L.Marker([
      mark.marker_coordinates_lat,
      mark.marker_coordinates_lon,
    ]);
    marker.addTo(map);
  }
};

const getMapAndMarkerData = async (value) => {
  addMarkerButton.disabled = false;

  mapData = await (await fetch(`/api/maps/${value}`)).json();
  let { id, map_coordinates_lat, map_coordinates_lon } = mapData;

  let mapMarkers = await fetch(`/api/markers/${id}`);
  let markerData = await mapMarkers.json();

  renderMapData(map_coordinates_lat, map_coordinates_lon, 11);

  renderMapMarkers(markerData);
};

const sendNewMarkerToDB = async () => {
  console.log(mapData.id);
};

init();

// Click functions to render specific map coordinates
austin.addEventListener('click', (e) => {
  e.preventDefault();
  let value = austin.innerText;
  getMapAndMarkerData(value);
});

houston.addEventListener('click', (e) => {
  e.preventDefault();
  let value = houston.innerText;
  getMapAndMarkerData(value);
});

dallas.addEventListener('click', (e) => {
  e.preventDefault();
  let value = dallas.innerText;
  getMapAndMarkerData(value);
});

addMarkerButton.addEventListener('click', (e) => {
  e.preventDefault();
  sendNewMarkerToDB();
});
