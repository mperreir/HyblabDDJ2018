
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
var limitesNiveauNationnal = [[51.369642, -20.413085],[40.594585, 25.992676]],
    limitesNiveauRegionnal = [[50.973980, -9.872491],[46.212135, 4.277899]];

var minZoomVar = 5, maxZoomVar = 8;


var mymap = L.map('mapid', {
                  maxBounds : limitesNiveauNationnal,
                  zoomSnap : (maxZoomVar - minZoomVar)
                }).setView(center = [47.0453352,2.0864263],
                          zoom = minZoomVar
                );

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
    maxZoom: maxZoomVar,
    minZoom: minZoomVar,
    id: 'mapbox.streets'
}).addTo(mymap);

//mymap.removeAttribution();

RegionsLayer.addTo(mymap);


//Gestion du zoom : ajout des layers et centrage sur zonne interessante
mymap.on('zoomend', function(ev) {
  if (mymap.getZoom() < 7){
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
