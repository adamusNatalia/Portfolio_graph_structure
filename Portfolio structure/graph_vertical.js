function create(treeData) {

    var margin = { top: 100, right: 100, bottom: 30, left: 100 },
      width = 700 - margin.left - margin.right,
      height = 1000 - margin.top - margin.bottom;


    var treemap = d3.tree()
      .size([height, width]);

    var svg = d3.select("body").append("svg")
       .attr("width", width + margin.left + margin.right),
       g=svg.attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var nodes = d3.hierarchy(treeData, function (d) {
        return d.children;
    });

    nodes = treemap(nodes);

    var link = g.selectAll(".link")
      .data(nodes.descendants().slice(1))
      .enter().append("path")
      .attr("class", "link")
      .attr("d", function (d) {
          return "M" + d.x/1.5 + "," + d.y
          + "C" + (d.x + d.parent.x) / 3 + "," + d.y
          + " " + (d.x + d.parent.x) / 3 + "," + d.parent.y
          + " " + d.parent.x/1.5 + "," + d.parent.y;
      });

    var i = 1;
    var node = g.selectAll(".node")
      .data(nodes.descendants())
      .enter().append("g")
      .attr("class", function (d) {
          return "node" +
          (d.children ? "" : " node-leaf" );
      })
      .attr("transform", function (d) {
          return "translate(" + d.x/1.5 + "," + d.y + ")";
      });


    node.append("circle")
      .attr("r", 12)
    .style("fill", function (d) { return d.children ? "#87d62b" : "#5cc1f7"; })
    .style("stroke", function (d) { return d.children ? "#28a745" : "#007bff"; });


    node.append("text")
      .attr("dy", ".35em")
      .attr("x", function (d) { return d.children ? -20 : -15; })
      .style("text-anchor", "end")
      .text(function (d) { return d.data.name; });
}
