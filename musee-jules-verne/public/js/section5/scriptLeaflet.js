
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


function getColorVille(d) {
  return  d <10 ? '#ABDEFF' :
          10 <= d < 20 ? '#75BAFF' :
          20 <= d < 100 ? '#4096FF' :
          '#0972FF';
}

function VilleOptions(feature) {
    return {
    radius: getSizeVille(feature.properties.OCCURRENCES),
    fillColor: "#87C6FF",//getColorVille(feature.properties.OCCURRENCES),
    color: "#87C6FF",
    weight: 1,
    opacity: 0.3,
    fillOpacity: 0.5
    }};

VillesLayer = L.geoJson(points, {pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, VilleOptions(feature)).bindPopup("<b>"+feature.properties.COMMUNE+"</b><br>On y a parlé "+feature.properties.OCCURRENCES+" fois de Jules Verne.")
      }});

//Source : ghybs - https://stackoverflow.com/questions/46724370/leaflet-zoom-to-a-point-with-mouse-wheel
L.Map.ScrollWheelZoom.include({
  _performZoom: function() {
    var map = this._map,
      zoom = map.getZoom(),
      snap = this._map.options.zoomSnap || 0;

    map._stop(); // stop panning and fly animations if any

    // map the delta with a sigmoid function to -4..4 range leaning on -1..1
    var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
      d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
      d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
      delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

    this._delta = 0;
    this._startTime = null;

    if (!delta) {
      return;
    }

    map.setZoomAround(map.options.scrollWheelZoom, zoom + delta);

    if (map.getZoom() == 8){
      RegionsLayer.addTo(map);
        map.removeLayer(VillesLayer);
    }else{
      map.removeLayer(RegionsLayer);
      VillesLayer.addTo(map);
    }
  }
});


var mymap = L.map('mapid', {
                  scrollWheelZoom : [48.401482, -2.360467],
                  maxBounds : [[53.012027, -18.822460],[38.561766, 24.705372]],
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
