const austin = document.getElementById('austin').innerText;
const houston = document.getElementById('houston').innerText;
const dallas = document.getElementById('dallas').innerText;

const renderMapData = (lat, lon) => {
  const map = L.map('map').setView([lat, lon], 5.5);

  googleStreets = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
  );
  googleStreets.addTo(map);
};

const init = async () => {
  console.log(austin);
  let initialMapData = await fetch('/api/maps/default');
  let { map_coordinates_lat, map_coordinates_lon } =
    await initialMapData.json();

  renderMapData(map_coordinates_lat, map_coordinates_lon);
};

// // Working function to double click to place marker on map and get coordinate data
// map.on('dblclick', (e) => {
//   L.marker(e.latlng).addTo(map);
//   document.getElementsByClassName('coordinate')[0].innerHTML = e.latlng.lat + e.latlng.lng;
//   console.log(e.latlng.lat, e.latlng.lng);
// });

init();
