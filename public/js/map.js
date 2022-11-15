/* eslint-disable no-restricted-syntax */
// Gets City Buttons by ID
const austin = document.getElementById('austin');
const houston = document.getElementById('houston');
const dallas = document.getElementById('dallas');
const addMarkerButton = document.getElementById('add-marker');
const markerName = document.getElementById('marker-name');
const markerLatitude = document.getElementById('marker-latitude');
const markerLongitude = document.getElementById('marker-longitude');
const markerDescription = document.getElementById('marker-description');

let mapData;
let map;

const listenForClick = () => {
  if (map) {
    map.on('click', (e) => {
      console.log(e);
    });
  }
};

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
  //   console.log('hello');
  //   // L.marker(e.latlng).addTo(map);
  //   // document.getElementsByClassName('coordinate')[0].innerHTML =
  //   //   e.latlng.lat + e.latlng.lng;
  //   // console.log(e.latlng.lat, e.latlng.lng);
  // });
};

const init = async () => {
  let initialMapData = await fetch('/api/maps/default');
  let { map_coordinates_lat, map_coordinates_lon } =
    await initialMapData.json();

  renderMapData(map_coordinates_lat, map_coordinates_lon);

  listenForClick();
};

const renderMapMarkers = (markers) => {
  for (let mark of markers) {
    let marker = new L.Marker([
      mark.marker_coordinates_lat,
      mark.marker_coordinates_lon,
    ]);
    marker.addTo(map);
  }
  listenForClick();
};

const getMapAndMarkerData = async (value) => {
  addMarkerButton.disabled = false;

  if (!mapData) mapData = await (await fetch(`/api/maps/${value}`)).json();
  let { id, map_coordinates_lat, map_coordinates_lon } = mapData;

  let mapMarkers = await fetch(`/api/markers/${id}`);
  let markerData = await mapMarkers.json();

  renderMapData(map_coordinates_lat, map_coordinates_lon, 11);

  renderMapMarkers(markerData);
};

const sendNewMarkerToDB = async () => {
  let body = {
    name: markerName.value,
    description: markerDescription.value,
    marker_coordinates_lat: markerLatitude.value,
    marker_coordinates_lon: markerLongitude.value,
  };

  await fetch(`/api/markers/${mapData.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  getMapAndMarkerData();
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
