//initialise a svg
var width = 550;
var height = 400;
var radius = Math.min(width, height) / 2;
var b = {
    w: 100, h: 30, s: 3, t: 10
};
var totalSize = 0;
var totalM1 = 0;
var totalM2 = 0;
var totalM3 = 0;
var totalM = 0;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total = 0;

var colors = {
    "Niveau1": "#5687d1",
    "Niveau2": "#7b615c",
    "Niveau3": "#de783b",
    "Niveau4": "#6ab975",
    "Niveau5": "#a173d1",
    "Niveau6": "#df8183",
    "Secteur-01" : "#dddc96",
    "Secteur-02": "#dd505b",
    "Secteur-03": "#6994b9",
    "Secteur-04": "#d1cc0b",
    "Secteur-05": "#b2d1cd",
    "Secteur-06": "#77457b",
    "Secteur-07": "#d11131",
    "Secteur-08": "#febcbc",
    "Secteur-09": "#cf9d9c"
};

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.T_effectifs; });

// var an1M = d3.layout.partition()
//     .value(function(d){return d.an1_Max;});
// var an1_eff = d3.layout.partition()
//     .value(function(d){return d.an1_Effectifs;});

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });
// var width = 750;
// var height = 600;
// var radius = Math.min(width, height) / 2;

function createVisualization(json) {
    // Basic setup of page elements.
    initializeBreadcrumbTrail();
    drawLegend();
    d3.select("#togglelegend").on("click", toggleLegend);

    // Bounding circle underneath the sunburst, to make it easier to detect
    // when the mouse leaves the parent g.
    vis.append("svg:circle")
        .attr("r", radius)
        .style("opacity", 0);

    var nodes = partition.nodes(json)
        .filter(function(d) {
            return (d.dx > 0.00001);
        });

    var path = vis.data([json]).selectAll("path")
        .data(nodes)
        .enter().append("svg:path")
        .attr("display", function(d) { return d.depth <3 && d.depth > 0  ? null : "none"; })
        .attr("d", arc)
        .attr("fill-rule", "evenodd")
        .style("fill", function(d) { return colors[d.name]; })
        .style("opacity", 1)
        .on("mouseover", mouseover)
         .on("click",getDescription);

    // Add the mouseleave handler to the bounding circle.
    d3.select("#container").on("mouseleave", mouseleave);

    // Get total size of the tree = value of root node from partition.
    totalSize = path.node().__data__.value;

    // totalM1 = path.node().__data__.an1_Max;
    // totalM2 = path.node().__data__.an2_Max;
    // totalM3 = path.node().__data__.an3_Max;
    // totalM = path.node().__data__.T_Max;
    // total1 = path.node().__data__.an1_Effectifs;
    // total2 = path.node().__data__.an2_Effectifs;
    // total3 = path.node().__data__.an3_Effectifs;

    var show = [];
    d3.select("#percentage")
        .text(show);

    var show1 = [];
    d3.select("#exp1")
    .text(show1);
    var show2 = [];
    d3.select("#exp2")
        .text(show2);
    var show3 = [];
    d3.select("#exp3")
        .text(show3);
    var showT = [];
    d3.select("exp")
        .text(showT);
}

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {
    var percentage = (100 * d.value / totalSize).toPrecision(3);
    var percentageString = percentage + "%";
    if (percentage < 0.1) {
        percentageString = "< 0.1%";
    }

    d3.select("#percentage")
        .text(percentageString);

    d3.select("#explanation")
        .style("visibility", "");

    var sequenceArray = getAncestors(d);
    updateBreadcrumbs(sequenceArray, percentageString);

    // Fade all the segments.
    d3.selectAll("path")
        .style("opacity", 0.3);

    // Then highlight only those that are an ancestor of the current segment.
    vis.selectAll("path")
        .filter(function(node) {
            return (sequenceArray.indexOf(node) >= 0);
        })
        .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

    // Hide the breadcrumb trail
    d3.select("#trail")
        .style("visibility", "hidden");

    // Deactivate all segments during transition.
    d3.selectAll("path").on("mouseover", null);

    // Transition each segment to full opacity and then reactivate it.
    d3.selectAll("path")
        .transition()
        .duration(1000)
        .style("opacity", 1)
        .each("end", function() {
            d3.select(this).on("mouseover", mouseover);
        });

    d3.select("#explanation")
        .style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
    var path = [];
    var current = node;
    while (current.parent) {
        path.unshift(current);
        current = current.parent;
    }
    return path;
}

function getPer(json){

}

function getDescription(d) {
    if (d.depth === 1) {
        for (var i = 0; i < d.children.length; i++) {
            for (var j = 0; j < d.children[i].children.length; j++) {
                totalM += d.children[i].children[j].T_Max;
                total += d.children[i].children[j].T_effectifs;
                // totalM1 += d.children[i].children[j].an1_Max;
                // totalM2 += d.children[i].children[j].an2_Max;
                // totalM3 += d.children[i].children[j].an3_Max;
                // total1 += d.children[i].children[j].an1_Effectifs;
                // total2 += d.children[i].children[j].an2_Effectifs;
                // total3 += d.children[i].children[j].an3_Effectifs;
            }
        }
    }
    var percent = (100 * total / totalM).toPrecision(3);
    var percentStr = percent + "%";
    // var percent1 = (100 * total1 / totalM1).toPrecision(3);
    // var percent2 = (100 * total2 / totalM2).toPrecision(3);
    // var percent3 = (100 * total3 / totalM3).toPrecision(3);
    // var percentStr1 = percent1 + "%";
    // var percentStr2 = percent2 + "%";
    // var percentStr3 = percent3 + "%";
    console.log(percent);


    // d3.select("#exp1")
    //     .text(percentStr1);
    // d3.select("#exp2")
    //     .text(percentStr2);
    // d3.select("#exp3")
    //     .text(percentStr3);

    d3.select("#exp")
        .text(percentStr+"\n"+"\n \r Effectifs par rapport à la capacité max.\n");

    d3.select("#showExplain")
        .style("visibility", "");

    // // Fade all the segments.
    // d3.selectAll("path")
    //     .style("opacity", 0.3);
    //
    // // Then highlight only those that are an ancestor of the current segment.
    // vis.selectAll("path")
    //     .filter(function(node) {
    //         return (sequenceArray.indexOf(node) >= 0);
    //     })
    //     .style("opacity", 1);
}

function initializeBreadcrumbTrail() {
    // Add the svg area.
    var trail = d3.select("#sequence").append("svg:svg")
        .attr("width", width)
        .attr("height", 50)
        .attr("id", "trail");
    // Add the label at the end, for the percentage.
    trail.append("svg:text")
        .attr("id", "endlabel")
        .style("fill", "#d8d8dd");
}

// Generate a strisng that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
    var points = [];
    points.push("0,0");
    points.push(b.w + ",0");
    points.push(b.w + b.t + "," + (b.h / 2));
    points.push(b.w + "," + b.h);
    points.push("0," + b.h);
    if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
        points.push(b.t + "," + (b.h / 2));
    }
    return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

    // Data join; key function combines name and depth (= position in sequence).
    var g = d3.select("#trail")
        .selectAll("g")
        .data(nodeArray, function(d) { return d.name + d.depth; });

    // Add breadcrumb and label for entering nodes.
    var entering = g.enter().append("svg:g");

    entering.append("svg:polygon")
        .attr("points", breadcrumbPoints)
        .style("fill", function(d) { return colors[d.name]; });

    entering.append("svg:text")
        .attr("x", (b.w + b.t) / 2)
        .attr("y", b.h / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.name; });

    // Set position for entering and updating nodes.
    g.attr("transform", function(d, i) {
        return "translate(" + i * (b.w + b.s) + ", 0)";
    });

    // Remove exiting nodes.
    g.exit().remove();

    // Now move and update the percentage at the end.
    d3.select("#trail").select("#endlabel")
        .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
        .attr("y", b.h / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(percentageString);

    // Make the breadcrumb trail visible, if it's hidden.
    d3.select("#trail")
        .style("visibility", "");

}

function drawLegend() {
    // Dimensions of legend item: width, height, spacing, radius of rounded rect.
    var li = {
        w: 90, h: 30, s: 3, r: 3
    };

    var legend = d3.select("#legend").append("svg:svg")
        .attr("width", li.w)
        .attr("height", d3.keys(colors).length * (li.h + li.s));

    var g = legend.selectAll("g")
        .data(d3.entries(colors))
        .enter().append("svg:g")
        .attr("transform", function(d, i) {
            return "translate(0," + i * (li.h + li.s) + ")";
        });

    g.append("svg:rect")
        .attr("rx", li.r)
        .attr("ry", li.r)
        .attr("width", li.w)
        .attr("height", li.h)
        .style("fill", function(d) { return d.value; });

    g.append("svg:text")
        .attr("x", li.w / 2)
        .attr("y", li.h / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.key; });
}

function toggleLegend() {
    var legend = d3.select("#legend");
    if (legend.style("visibility") === "hidden") {
        legend.style("visibility", "");
    } else {
        legend.style("visibility", "hidden");
    }
}

function getPerNiv(d,string){

    var totalS = 0;
    for (var i in d) {
        totalS += d.Effectifs;
        i++;
    }
    return (100 * size / totalSize).toPrecision(3);
}


function clickGetImage1() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-01"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        // $('#ech').removeAll();
        createVisualization(hierarchyData);
    });
}

function clickGetImage2() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-02"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage3() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-03"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage4() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-04"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage5() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-05"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage6() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-06"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage7() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-07"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage8() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-08"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage9() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-09"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage10() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-10"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage11() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-11"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage12() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-12"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage13() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-13"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage14() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-14"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage15() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-15"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage16() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-16"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage17() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-17"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage18() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-18"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage19() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-19"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage20() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-20"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage21() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-21"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}

function clickGetImage22() {
    var data = [];
    data.boxes = [];
    var hierarchyData = {name: "root", children: []},
        levels = ["SECTEUR","NIV"];
    d3.json("../Data/Eff_new.json", function (dataset) {
        // select some important infos
        dataset.forEach(function (d) {
            if (d.GFE==="GFE-22"){
                data.push(d);
                data.boxes.push({
                    SECTEUR: d.SECTEUR,
                    NIV: d.NIV,
                    an1_capacité_maxi: d.an1_capacité_maxi,
                    an1: d.an1,
                    an2_capacité_maxi: d.an2_capacité_maxi,
                    an2: d.an2,
                    an3_capacité_maxi: d.an3_capacité_maxi,
                    an3: d.an1,
                    Total_capacité_maxi: d.Total_capacité_maxi,
                    Total_effectifs: d.Total_effectifs
                });
            }
        });
        //Layered data
        data.forEach(function (d) {
            var depthCursor = hierarchyData.children;
            levels.forEach(function (property, depth) {
                var index;
                depthCursor.forEach(function (child, i) {
                    if (d[property] === child.name) index = i;
                });
                if (isNaN(index)) {
                    depthCursor.push({name: d[property], children: []});
                    index = depthCursor.length - 1;
                }
                // Now reference the new child array as we go deeper into the tree
                depthCursor = depthCursor[index].children;
                // This is a leaf, so add the last element to the specified branch
                if (depth === levels.length - 1) depthCursor.push({Diplôme: d.DIPLOME, an1_Max: d.an1_capacité_maxi, an1_Effectifs: d.an1, an2_Max: d.an2_capacité_maxi, an2_Effectifs: d.an2, an3_Max: d.an3_capacité_maxi, an3_Effectifs: d.an3, T_Max: d.Total_capacité_maxi, T_effectifs: d.Total_effectifs});
                // if (depth === levels.length - 1) depthCursor.push({Effectifs: d.Total_effectifs});

            })
        });
        console.log(hierarchyData);
        createVisualization(hierarchyData);
    });
}