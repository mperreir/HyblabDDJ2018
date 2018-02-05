var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    //initialise a svg
    var width = 550;
    var height = 400;
    var radius = Math.min(width, height) / 2;

    // Breadcrumb dimensions: width, height, spacing, width of tip/tail.
    var b = {
        w: 100, h: 25, s: 3, t: 10
    };
    var totalSize = 0;
    var totalM = 0;
    var total = 0;

// Mapping of step names to colors.
    var colors = {
        'Niveau1': '#4e2850',
        'Niveau2': '#6a376e',
        'Niveau3': '#8d4d91',
        'Niveau4': '#7f699d',
        'Niveau5': '#a594eb',
        'Niveau6': '#d6d4f5',
        'Secteur-01': '#093045',
        'Secteur-02': '#0b435f',
        'Secteur-03': '#0c587b',
        'Secteur-04': '#1078a8',
        'Secteur-05': '#149ed9',
        'Secteur-06': '#00bbff',
        'Secteur-07': '#83a1a8',
        'Secteur-08': '#77c0db',
        'Secteur-09': '#b9e3ec'
    };

    var vis = null;
    $scope.initChart = function () {
        vis = d3.select('#chart').append('svg:svg')
                .attr('width', width)
                .attr('height', height)
                .append('svg:g')
                .attr('id', 'container')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    };

    var partition = d3.layout.partition()
            .size([2 * Math.PI, radius * radius])
            .value(function (d) {
                return d.T_effectifs;
            });

    var arc = d3.svg.arc()
            .startAngle(function (d) {
                return d.x;
            })
            .endAngle(function (d) {
                return d.x + d.dx;
            })
            .innerRadius(function (d) {
                return Math.sqrt(d.y);
            })
            .outerRadius(function (d) {
                return Math.sqrt(d.y + d.dy);
            });

    $scope.aJson = [{
        'first': 'GFE-01',
        'second': 'Agriculture'
    }, {
        'first': 'GFE-02',
        'second': 'Pêche - Mer - Aquaculture'
    }, {
        'first': 'GFE-03',
        'second': 'Bâtiment gros œuvre - Génie civil - Extraction'
    }, {
        'first': 'GFE-04',
        'second': 'Bâtiment : équipements et finitions'
    }, {
        'first': 'GFE-05',
        'second': 'Structures métalliques - Travail des métaux - Fonderie'
    }, {
        'first': 'GFE-06',
        'second': 'Mécanique - Automatismes'
    }, {
        'first': 'GFE-07',
        'second': 'Electricité - Electrotechnique - Electronique'
    }, {
        'first': 'GFE-08',
        'second': 'Travail des matériaux - Industries de process - Laboratoire'
    }, {
        'first': 'GFE-09',
        'second': 'Production alimentaire - Cuisine'
    }, {
        'first': 'GFE-10',
        'second': 'Textile - Habillement - Cuir'
    }, {
        'first': 'GFE-11',
        'second': 'Travail du bois'
    }, {
        'first': 'GFE-12',
        'second': 'Techniques graphiques - Impression'
    }, {
        'first': 'GFE-13',
        'second': 'Transports - Conduite - Manutention - Magasinage'
    }, {
        'first': 'GFE-14',
        'second': 'Tertiaire de bureau - Tertiaire spécialisé'
    }, {
        'first': 'GFE-15',
        'second': 'Commerce et distribution'
    }, {
        'first': 'GFE-16',
        'second': 'Paramédical - Travail social - Soins personnels'
    }, {
        'first': 'GFE-17',
        'second': 'Hôtellerie - Restauration - Tourisme - Sports - Animation socioculturelle - Loisirs'
    }, {
        'first': 'GFE-18',
        'second': 'Nettoyage - Assainissement - Environnement - Sécurité'
    }, {
        'first': 'GFE-19',
        'second': 'Techniques de la communication - Média'
    }, {
        'first': 'GFE-20',
        'second': 'Arts appliqués - Arts du spectacle'
    }, {
        'first': 'GFE-21',
        'second': 'Formations générales - Généralistes - Développement personnel'
    }, {
        'first': 'GFE-22',
        'second': 'Formations d’aide à l’insertion sociale et professionnell'
    }];

    $scope.clickGetImage = function (params) {
        var data = [];
        data.boxes = [];
        var hierarchyData = {name: 'root', children: []},
                levels = ['SECTEUR', 'NIV'];
        d3.json('../data/Eff_new.json', function (dataset) {
            // select some important infos
            angular.forEach(dataset, function (value, key) {
                if (value.GFE === params.first) {
                    data.push(value);
                    data.boxes.push({
                        SECTEUR: value.SECTEUR,
                        NIV: value.NIV,
                        an1_capacité_maxi: value.an1_capacité_maxi,
                        an1: value.an1,
                        an2_capacité_maxi: value.an2_capacité_maxi,
                        an2: value.an2,
                        an3_capacité_maxi: value.an3_capacité_maxi,
                        an3: value.an1,
                        Total_capacité_maxi: value.Total_capacité_maxi,
                        Total_effectifs: value.Total_effectifs
                    });
                }
            });
            //Layered data
            angular.forEach(data, function (value, key) {
                var depthCursor = hierarchyData.children;
                levels.forEach(function (property, depth) {
                    var index;
                    depthCursor.forEach(function (child, i) {
                        if (value[property] === child.name) index = i;
                    });
                    if (isNaN(index)) {
                        depthCursor.push({name: value[property], children: []});
                        index = depthCursor.length - 1;
                    }
                    // Now reference the new child array as we go deeper into the tree
                    depthCursor = depthCursor[index].children;
                    // This is a leaf, so add the last element to the specified branch
                    if (depth === levels.length - 1) depthCursor.push({
                        Diplôme: value.DIPLOME,
                        an1_Max: value.an1_capacité_maxi,
                        an1_Effectifs: value.an1,
                        an2_Max: value.an2_capacité_maxi,
                        an2_Effectifs: value.an2,
                        an3_Max: value.an3_capacité_maxi,
                        an3_Effectifs: value.an3,
                        T_Max: value.Total_capacité_maxi,
                        T_effectifs: value.Total_effectifs
                    });
                })
            });
            createVisualization(hierarchyData);
        });
    };

    function createVisualization(json) {
        // Basic setup of page elements.
        document.getElementById('chart').innerHTML = '';
        $scope.initChart();
        
        initializeBreadcrumbTrail();

        drawLegend();
        d3.select('#togglelegend').on('click', toggleLegend);

        // Bounding circle underneath the sunburst, to make it easier to detect
        // when the mouse leaves the parent g.
        vis.append('svg:circle')
                .attr('r', radius)
                .style('opacity', 0);

        var nodes = partition.nodes(json)
                .filter(function (d) {
                    return (d.dx > 0.00001);
                });

        var path = vis.data([json]).selectAll('path')
                .data(nodes)
                .enter().append('svg:path')
                .attr('display', function (d) {
                    return d.depth < 3 && d.depth > 0 ? null : 'none';
                })
                .attr('d', arc)
                .attr('fill-rule', 'evenodd')
                .style('fill', function (d) {
                    return colors[d.name];
                })
                .style('opacity', 1)
                .on('mouseover', mouseover)
                .on('click', getDescription);

        // Add the mouseleave handler to the bounding circle.
        d3.select('#container').on('mouseleave', mouseleave);

        // Get total size of the tree = value of root node from partition.
        totalSize = path.node().__data__.value;

        var show = [];
        d3.select('#percentage')
                .text(show);

        // var show1 = [];
        // d3.select('#exp1')
        //         .text(show1);
        // var show2 = [];
        // d3.select('#exp2')
        //         .text(show2);
        // var show3 = [];
        // d3.select('#exp3')
        //         .text(show3);
        var showT = [];
        d3.select('exp')
                .text(showT);
    }

    // Fade all but the current sequence, and show it in the breadcrumb trail.
    function mouseover(d) {
        var percentage = (100 * d.value / totalSize).toPrecision(3);
        var percentageString = percentage + '%';
        if (percentage < 0.1) {
            percentageString = '< 0.1%';
        }

        d3.select('#percentage')
                .text(percentageString);

        console.log("test");
        d3.select('#explanation')
                .style('visibility', '');

        var sequenceArray = getAncestors(d);
        updateBreadcrumbs(sequenceArray, percentageString);

        // Fade all the segments.
        d3.selectAll('path')
                .style('opacity', 0.3);

        // Then highlight only those that are an ancestor of the current segment.
        vis.selectAll('path')
                .filter(function (node) {
                    return (sequenceArray.indexOf(node) >= 0);
                })
                .style('opacity', 1);
    }

// Restore everything to full opacity when moving off the visualization.
    function mouseleave(d) { 
        // Hide the breadcrumb trail
        d3.select('#trail')
                .style('visibility', 'hidden');

        // Deactivate all segments during transition.
        d3.selectAll('path').on('mouseover', null);

        // Transition each segment to full opacity and then reactivate it.
        d3.selectAll('path')
                .transition()
                .duration(1000)
                .style('opacity', 1)
                .each('end', function () {
                    d3.select(this).on('mouseover', mouseover);
                });

        d3.select('#explanation')
                .style('visibility', 'hidden');
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

    function getDescription(d) {
        totalM =0 ;
        total = 0;
        if (d.depth === 1) {
            for (var i = 0; i < d.children.length; i++) {
                for (var j = 0; j < d.children[i].children.length; j++) {
                    totalM += d.children[i].children[j].T_Max;
                    total += d.children[i].children[j].T_effectifs;
                }
            }
        }
        var percent = (100 * total / totalM).toPrecision(3);
        var percentStr = percent + '%';

        d3.select('#exp')
                .text(percentStr + '\n' + '\n \r Effectifs par rapport à la capacité max.\n');

        d3.select('#showExplain')
                .style('visibility', '');
    }

    function initializeBreadcrumbTrail() {
        // Add the svg area.
        var trail = d3.select('#sequence').append('svg:svg')
                .attr('width', width)
                .attr('height', 50)
                .attr('id', 'trail');
        // Add the label at the end, for the percentage.
        trail.append('svg:text')
                .attr('id', 'endlabel')
                .style('fill', '#d8d8dd');
    }

// Generate a strisng that describes the points of a breadcrumb polygon.
    function breadcrumbPoints(d, i) {
        var points = [];
        points.push('0,0');
        points.push(b.w + ',0');
        points.push(b.w + b.t + ',' + (b.h / 2));
        points.push(b.w + ',' + b.h);
        points.push('0,' + b.h);
        if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
            points.push(b.t + ',' + (b.h / 2));
        }
        return points.join(' ');
    }

// Update the breadcrumb trail to show the current sequence and percentage.
    function updateBreadcrumbs(nodeArray, percentageString) {

        // Data join; key function combines name and depth (= position in sequence).
        var g = d3.select('#trail')
                .selectAll('g')
                .data(nodeArray, function (d) {
                    return d.name + d.depth;
                });

        // Add breadcrumb and label for entering nodes.
        var entering = g.enter().append('svg:g');

        entering.append('svg:polygon')
                .attr('points', breadcrumbPoints)
                .style('fill', function (d) {
                    return colors[d.name];
                });

        entering.append('svg:text')
                .attr('x', (b.w + b.t) / 2)
                .attr('y', b.h / 2)
                .attr('dy', '0.35em')
                .attr('text-anchor', 'middle')
                .text(function (d) {
                    return d.name;
                });

        // Set position for entering and updating nodes.
        g.attr('transform', function (d, i) {
            return 'translate(' + i * (b.w + b.s) + ', 0)';
        });

        // Remove exiting nodes.
        g.exit().remove();

        // Now move and update the percentage at the end.
        d3.select('#trail').select('#endlabel')
                .attr('x', (nodeArray.length + 0.5) * (b.w + b.s))
                .attr('y', b.h / 2)
                .attr('dy', '0.35em')
                .attr('text-anchor', 'middle')
                .text(percentageString);

        // Make the breadcrumb trail visible, if it's hidden.
        d3.select('#trail')
                .style('visibility', '');

    }

    function drawLegend() {
        // Dimensions of legend item: width, height, spacing, radius of rounded rect.
        var li = {
            w: 90, h: 30, s: 3, r: 3
        };

        var legend = d3.select('#legend').append('svg:svg')
                .attr('width', li.w)
                .attr('height', d3.keys(colors).length * (li.h + li.s));

        var g = legend.selectAll('g')
                .data(d3.entries(colors))
                .enter().append('svg:g')
                .attr('transform', function (d, i) {
                    return 'translate(0,' + i * (li.h + li.s) + ')';
                });

        g.append('svg:rect')
                .attr('rx', li.r)
                .attr('ry', li.r)
                .attr('width', li.w)
                .attr('height', li.h)
                .style('fill', function (d) {
                    return d.value;
                });

        g.append('svg:text')
                .attr('x', li.w / 2)
                .attr('y', li.h / 2)
                .attr('dy', '0.35em')
                .attr('text-anchor', 'middle')
                .text(function (d) {
                    return d.key;
                });
    }

    function toggleLegend() {
        var legend = d3.select('#legend');
        if (legend.style('visibility') === 'hidden') {
            legend.style('visibility', '');
        } else {
            legend.style('visibility', 'hidden');
        }
    }
});