const map = L.map('map').setView([30.267, -97.743], 5.5);
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});
googleStreets.addTo(map);

// Working function to double click to place marker on map and get coordinate data
map.on('dblclick', (e) => {
  L.marker(e.latlng).addTo(map);
  document.getElementsByClassName('coordinate')[0].innerHTML = e.latlng.lat + e.latlng.lng;
  console.log(e.latlng.lat, e.latlng.lng);
});