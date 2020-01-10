// Map
var mymap = L.map('mapid').setView([57.837509, 26.175690], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoia2l1ciIsImEiOiJjandyYnpzangwN241NDhwOGZmcnY3Mnd4In0.whcspHTZo41Gk-pRERbZAg'
}).addTo(mymap);


var marker = L.marker([57.803890, 26.061666]).addTo(mymap);

marker.bindPopup("<b>Jaanikese krossirada</b>").openPopup();

var marker = L.marker([57.837509, 26.175690]).addTo(mymap);

marker.bindPopup("<b>Vilaski krossirada</b>").closePopup();