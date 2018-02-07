var width = 800,
  height = 600;

var svg = d3.select( "#testMap" )
  .append( "svg" )
  .attr( "width", width )
  .attr( "height", height );

var departement = svg.append( "g" );

var albersProjection = d3.geoAiry()
  .scale( 35000 )
  .rotate( [1.7,0] )
  .center( [0, 47.36] )
  .translate( [width/2,height/2] );

var geoPath = d3.geoPath()
  .projection( albersProjection );

departement.selectAll( "path" )
  .data( loire.features )
  .enter()
  .append( "path" )
  .attr( "fill", "#98af1a" )
  .attr( "fill-opacity", 1)
  .attr( "d", geoPath );

var assmat_location = svg.append( "g" );
var projection_assmat = d3.geoProject(assmat, albersProjection);

var creche_location = svg.append( "g" );
var projection_creche = d3.geoProject(creches, albersProjection);

var mam_location = svg.append( "g" );
var projection_mam = d3.geoProject(mam, albersProjection);

var pressAssmat = 0;

function print_locations_assmat(){
  if (pressAssmat == 0){
    assmat_location.selectAll( "path" )
      .data( projection_assmat.features )
      .enter()
      .append( "circle" )
      .attr( "fill", "#F2ED6F" )
      .attr( "stroke", "#F2ED6F" )
      .attr( "stroke-width", 1)
      .attr( "cx", function(d){return  ( d.geometry.coordinates[0]); } )
      .attr( "cy", function(d){return d.geometry.coordinates[1]; } )
      .attr( "r", 0.7);
	  pressAssmat = 1;
	  document.getElementsByClassName("button6x1")[0].style.backgroundColor = '#F2ED6F';
  }
  else if(pressAssmat == 1){
    assmat_location.selectAll( "circle" ).remove();
	pressAssmat = 0;
	document.getElementsByClassName("button6x1")[0].style.backgroundColor = '#bbbbbb';
  }
}

var pressMam = 0;

function print_locations_mam(){
  if (pressMam == 0){
    mam_location.selectAll( "path" )
      .data( projection_mam.features )
      .enter()
      .append( "circle" )
      .attr( "fill", "#587792" )
      .attr( "stroke", "#587792" )
      .attr( "stroke-width", 1)
      .attr( "cx", function(d){return  ( d.geometry.coordinates[0]); } )
      .attr( "cy", function(d){return d.geometry.coordinates[1]; } )
      .attr( "r", 3);
	  pressMam = 1;
	  document.getElementsByClassName("button6x2")[0].style.backgroundColor = '#587792';	
  }
  else if(pressMam == 1){
    mam_location.selectAll( "circle" ).remove();
	pressMam = 0;
	document.getElementsByClassName("button6x2")[0].style.backgroundColor = '#bbbbbb';
  }
}

var pressCreche = 0;

function print_locations_creche(){
  if (pressCreche == 0){
    creche_location.selectAll( "path" )
      .data( projection_creche.features )
      .enter()
      .append( "circle" )
      .attr( "fill", "#BB4430" )
      .attr( "stroke", "#BB4430" )
      .attr( "stroke-width", 1)
      .attr( "cx", function(d){return  ( d.geometry.coordinates[0]); } )
      .attr( "cy", function(d){return d.geometry.coordinates[1]; } )
      .attr( "r", 3);
	  pressCreche = 1;
	  document.getElementsByClassName("button6x3")[0].style.backgroundColor = '#BB4430';	
  }
  else if(pressCreche == 1){
    creche_location.selectAll( "circle" ).remove();
	pressCreche = 0;
	document.getElementsByClassName("button6x3")[0].style.backgroundColor = '#bbbbbb';
  }
}


