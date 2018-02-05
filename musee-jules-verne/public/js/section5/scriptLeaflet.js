
//  Layer Regions
function getColorRegions(d) {
  return d == 1 ? '#4096FF' : '#87C6FF';
}

function styleRegions(feature) {
  return {
    fillColor: getColorRegions(feature.properties.color),
    color: 'white',
    weight: 4,
    opacity: .3,
    fillOpacity: .5
  };
}

RegionsLayer = L.geoJson(regions, {style :styleRegions});

//  Layer Villes
function getSizeVille(d) {
  return Math.sqrt(d)*5;//(d/20)*15
}

function VilleOptions(feature) {
  return {
  radius: getSizeVille(feature.properties.OCCURRENCES),
  fillColor: "#87C6FF",
  color: "#87C6FF",
  weight: 1,
  opacity: 0.3,
  fillOpacity: 0.5
}};


function styleRegionsNiveauRegional(feature) {
  return {
    fillColor: '#4096FF',
    color: '#4096FF',
    weight: 4,
    opacity: .3,
    fillOpacity: 0
};};

VillesLayer = L.geoJSON();

L.geoJson(regionBretagne, {style :styleRegionsNiveauRegional}).addTo(VillesLayer);
L.geoJson(regionNormandie, {style :styleRegionsNiveauRegional}).addTo(VillesLayer);
L.geoJson(regionPaysDeLaLoire, {style :styleRegionsNiveauRegional}).addTo(VillesLayer);

L.geoJson(points, {pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, VilleOptions(feature)).bindPopup("<b>"+feature.properties.COMMUNE+"</b><br>On y a parlé "+feature.properties.OCCURRENCES+" fois de Jules Verne.")
      }}).addTo(VillesLayer);

//Initialisation
var limitesNiveauNationnal = [[53.012027, -18.822460],[38.561766, 24.705372]],
    limitesNiveauRegionnal = [[50.973980, -9.872491],[46.212135, 4.277899]];

var mymap = L.map('mapid', {
                  maxBounds : limitesNiveauNationnal,
                  zoomSnap : 2
                }).setView(center = [46.52863469527167,2.43896484375],
                          zoom = 6
                );

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    maxZoom: 8,
    minZoom: 6,
    id: 'mapbox.streets'
}).addTo(mymap);

RegionsLayer.addTo(mymap);


//Gestion du zoom : ajout des layers et centrage sur zonne interessante
mymap.on('zoomend', function(ev) {
  if (mymap.getZoom() != 8){
    RegionsLayer.addTo(mymap);
    mymap.setMaxBounds(limitesNiveauNationnal)
  }else{
    VillesLayer.addTo(mymap);
    mymap.setMaxBounds(limitesNiveauRegionnal)
  }
});


mymap.on('zoomstart', function(ev) {
  if (mymap.hasLayer(RegionsLayer)){
    mymap.removeLayer(RegionsLayer);
  }

  if (mymap.hasLayer(VillesLayer)){
    mymap.removeLayer(VillesLayer);
  }
});
