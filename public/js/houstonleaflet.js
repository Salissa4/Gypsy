const map = L.map('map').setView([29.760, -95.369], 13);

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 25,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleStreets.addTo(map);

map.on('dblclick', function (e) {
    L.marker(e.latlng).addTo(map);
    let newMarker = document.getElementsByClassName('coordinate')[0].innerHTML = e.latlng.lat + e.latlng.lng;
    console.log(e.latlng.lat, e.latlng.lng);
});

// TODO: Write Get and Post front end functions to integrate data with back end