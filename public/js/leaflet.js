/* eslint-disable no-undef */
const map = L.map('map').setView([30.267, -97.743], 13);
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});
googleStreets.addTo(map);
