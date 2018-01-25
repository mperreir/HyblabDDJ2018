var data = [
    {"year": 2001,    "debt": 31.4},
    {"year": 2002,    "debt": 32.6},
    {"year": 2003,    "debt": 34.5},
    {"year": 2004,    "debt": 35.5},
    {"year": 2005,    "debt": 35.6},
    {"year": 2006,    "debt": 35.3},
    {"year": 2007,    "debt": 35.2},
    {"year": 2008,    "debt": 39.3},
    {"year": 2009,    "debt": 52.3},
    {"year": 2010,    "debt": 60.9},
    {"year": 2011,    "debt": 65.9},
    {"year": 2012,    "debt": 70.4},
    {"year": 2013,    "debt": 72.6},
    {"year": 2014,    "debt": 74.4},
    {"year": 2015,    "debt": 73.6}
];

var f = d3.f;
var sel = d3.select("#chart");
var c = d3.conventions({
    parentSel: sel,
    width: 500,
    height: 400,
    margin: {top: 30, right: 20, bottom: 30, left: 50}
});



c.svg.append('rect').at({width: c.width, height: c.height, opacity: 0});

c.x.domain([2001, 2015])
c.y.domain([0, 100])

c.xAxis.ticks(4).tickFormat(f());
c.yAxis.ticks(5).tickFormat(d => d + '%')


    var area = d3.area().x(f('year', c.x)).y0(f('debt', c.y)).y1(c.height);
    var line = d3.area().x(f('year', c.x)).y(f('debt', c.y));

    var clipRect = c.svg
        .append('clipPath#clip')
        .append('rect')
        .at({width: c.x(2008) - 2, height: c.height});

    var correctSel = c.svg.append('g').attr('clip-path', 'url(#clip)');

    correctSel.append('path.area').at({d: area(data)});
    correctSel.append('path.line').at({d: line(data)});
    yourDataSel = c.svg.append('path.your-line');


    d3.drawAxis(c);

    yourData = data
        .map(function(d){ return {year: d.year, debt: d.debt, defined: 0} })
        .filter(function(d){
            if (d.year == 2008) d.defined = true;
            return d.year >= 2008
        });

    var completed = false;


    var drag = d3.drag()
        .on('drag', function(){
            var pos = d3.mouse(this);
            var year = clamp(2009, 2016, c.x.invert(pos[0]));
            var debt = clamp(0, c.y.domain()[1], c.y.invert(pos[1]));

            yourData.forEach(function(d){
                if (Math.abs(d.year - year) < .5){
                    d.debt = debt;
                    d.defined = true
                }
            });

            yourDataSel.at({d: line.defined(f('defined'))(yourData)});

        });

    c.svg.call(drag);





function clamp(a, b, c){ return Math.max(a, Math.min(b, c)) }

function drawLastPart(){
    completed = true;
    clipRect.transition().duration(1000).attr('width', c.x(2015))
}

