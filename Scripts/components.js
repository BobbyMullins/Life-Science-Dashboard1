/* ******************************* */
/* D3 JS Double Bar Chart */
/* ******************************* */

function graphInit(chartLocation, yData, xData1, xData2) {

 var myData = yData;  
 var xLabel1 = xData1;
 var xLabel2 = xData2; 

 var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 250 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;
    
 var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1)
    .domain(d3.range(0, xLabel1.length));
    
 var x1 = d3.scale.ordinal();  
    
 var y = d3.scale.linear()
    .domain([0, d3.max(myData)])
    .range([height, 0]);
    
    
 var color = d3.scale.ordinal()
    .range(["#4472c4", "#ff7f0e"]);
    
    
 var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom")

    
 var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
//    .tickFormat(d3.format(".2s"));
    .ticks(5)
    .tickPadding(5);
    
    //console.log(margin.left);
 var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
//    var data = [
//        {letter: "A", frequency: 78,depth:400},
//        {letter: "B", frequency: 567,depth:250}, 
//        {letter:'C', frequency: 387, depth:300},
//        {letter:'D', frequency: 754, depth:568}
//    ];
    
    var data = [
        {letter: xLabel1[0], frequency: xLabel2[0],depth: myData[0]},
        {letter: xLabel1[1], frequency: xLabel2[1],depth: myData[1]}, 
        {letter: xLabel1[2], frequency: xLabel2[2], depth: myData[2]},
        {letter: xLabel1[3], frequency: xLabel2[3], depth: myData[3]}
    ];

    var groupNames=d3.keys(data[0]).filter(function(key){return key!="letter";})
    
    data.forEach(function(d){
        d.groups=groupNames.map(function(name){return {name:name,value:+d[name]};})
    });
    
    x0.domain(data.map(function(d){return d.letter;}));
    
    x1.domain(groupNames).rangeRoundBands([0, x0.rangeBand()]);
    
    y.domain([0,d3.max(data,function(d){
        return d3.max(d.groups,function(d){
            return d.value;
        });
    })]);
    
    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
//  .append("text")
//    .attr("transform", "rotate(-90)")
//    .attr("y", 6)
//    .attr("dy", ".71em")
//    .style("text-anchor", "end")
//    .text("Letter Fun");

    var state = svg.selectAll(".state")
    .data(data)
    .enter().append("g")
    .attr("class", "g")
    .attr("transform", function(d) { return "translate(" + x0(d.letter) + ",0)"; });
    
    state.selectAll("rect")
    .data(function(d) { return d.groups; })
    .enter().append("rect")
     .attr("width", x1.rangeBand())
     .attr("x", function(d) { return x1(d.name); })
     .attr("y", function(d) { return y(d.value); })
     .attr("height", function(d) { return height - y(d.value); })
     .style("fill", function(d) { return color(d.name); });
    
//X Axis Labeling 
    var xGuide = d3.select('svg')
        .append('g')
            xAxis(xGuide)
            xGuide.attr('transform', 'translate('+margin.left+','+(height + margin.top)+')')
            xGuide.selectAll('path')
                .style('fill', 'none')
                .style('stroke', '#000')
            xGuide.selectAll('line')
                .style('stroke', '#000')
                
    
}        

/* ******************************** */
// Kendo JS Grid 1
/* ******************************** */

function gridInit(gridLocation, columnHeaders, data) {
    
    for (var i = 0; i<columnHeaders.length; i++) {
        var field = field; 
        var title = title; 
        columns = columnHeaders[i];  
    }   

    $(document).ready(function(){
        
        
        $(gridLocation).kendoGrid({
            sortable: true, 
            pagable: true, 
            filterable: true, 
            
            columns: columnHeaders, 
            
            dataSource: data
            
        });
        
    });
    
}

/* ******************************** */
// Component 6 - Rig Details 
/* ******************************** */
 

function initDetails(rowDetails, rigData) { 
    
    var rowDetails = ['Rig Name', 'Location', 'Telephone Number', 'GEO Coordinates']; 
 
    for (var i = 0; i<rowDetails.length; i++) { 
        
        
    }

    
    document.getElementById('component6').appendChild(h, t); 

    
}
