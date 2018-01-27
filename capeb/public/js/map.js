var body = d3.select("body");
var svg=body.append("svg");
svg.attr("width", 600).attr("height", 600);
var projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(10000)
    .translate([800,500]);
var path = d3.geoPath(projection);

path.projection(projection);
d3.json("data/contours-epci-2017.geojson", function(err, geoJSON) {
    var map=svg.selectAll("path").data(geoJSON.features);
    map.enter()
        .append("path")
            .attr("fill","white")
            .attr("stroke","black")
            .attr("d", path)
            .attr("siren_epci",function (d) { return d.properties.siren_epci; })
            .on("click", function(d) {console.log(d.properties.nom_comple);})
        .append("svg:title")
            .text(function(d) {return d.properties.nom_comple});
});
