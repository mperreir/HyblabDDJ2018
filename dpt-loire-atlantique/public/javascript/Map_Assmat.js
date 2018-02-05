var width = 800,
  height = 600;

var svg = d3.select( "#section6" )
  .append( "svg" )
  .attr( "id", "map_assmat")

var departement = svg.append( "g" ).attr("map_departement");

var albersProjection = d3.geoAiry()
  .scale( 39000 )
  .rotate( [1.7,0] )
  .center( [0, 47.35] )
  .translate( [width/2,height/2] );

var geoPath = d3.geoPath()
  .projection( albersProjection );

departement.selectAll( "path" )
  .data( loire.features )
  .enter()
  .append( "path" )
  .attr( "fill", "#Acc815" )
  .attr( "fill-opacity", 1)
  .attr( "d", geoPath );


var assmat_location = svg.append( "g" );
var projection_assmat = d3.geoProject(assmat, albersProjection)

var mam_location = svg.append( "g" );
var projection_mam = d3.geoProject(mam, albersProjection)

function print_locations_assmat(elt){
  if (elt.checked){
    assmat_location.selectAll( "path" )
      .data( projection_assmat.features )
      .enter()
      .append( "circle" )
      .attr( "fill", "#Acc815" )
      .attr( "stroke", "#F56525" )
      .attr( "stroke-width", 1)
      .attr( "cx", function(d){return  ( d.geometry.coordinates[0]); } )
      .attr( "cy", function(d){return d.geometry.coordinates[1]; } )
      .attr( "r", 0.9);
  }
  else
    assmat_location.selectAll( "circle" ).remove();
}

function print_locations_mam(elt){
  if (elt.checked){
    mam_location.selectAll( "path" )
      .data( projection_mam.features )
      .enter()
      .append( "circle" )
      .attr( "fill", "F4F359B" )
      .attr( "stroke", "#4F359B" )
      .attr( "stroke-width", 1)
      .attr( "cx", function(d){return  ( d.geometry.coordinates[0]); } )
      .attr( "cy", function(d){return d.geometry.coordinates[1]; } )
      .attr( "r", 2);
  }
  else
    mam_location.selectAll( "circle" ).remove();
}
/*
var creches_location = svg.append( "g");

var projection_creches = d3.geoProject(creches, albersProjection)
creches_location.selectAll( "path" )
  .data( projection_creches.features )
  .enter()
  .append( "circle" )
  .attr( "fill", "blue" )
  .attr( "stroke", "#F56525" )
  .attr( "stroke-width", 1)
  .attr( "cx", function(d){return (d.geometry.coordinates[0]); } )
  .attr( "cy", function(d){return (d.geometry.coordinates[1]); } )
  .attr( "r", 0.9);
*/

