// Map
var mymap = L.map('mapid').setView([57.837509, 26.175690], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1Ijoia2l1ciIsImEiOiJjandyYnpzangwN241NDhwOGZmcnY3Mnd4In0.whcspHTZo41Gk-pRERbZAg'
}).addTo(mymap);


var marker = L.marker([57.803890, 26.061666]).addTo(mymap);

marker.bindPopup("<b>Jaanikese krossirada</b>").openPopup();

var marker = L.marker([57.837509, 26.175690]).addTo(mymap);

marker.bindPopup("<b>Vilaski krossirada</b>").closePopup();