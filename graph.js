d3.csv('locusData/Locus_aerospace_nodes-Table 1.csv', (error, data) => {
        let xCount = 40;
        let yCount = 10;
        var nodes = data.map((node, ind) => {
          let x 
          let y
          if(ind%10){
            x = xCount;
            y = yCount;
            xCount += 200
          }else{
            x = xCount
            xCount = 40;
            yCount = yCount +150;
            y = yCount
          }
            return {
              "x" : x, 
              "y" : y,
              "name": node.label, 
              "id": node.id
            }

        })

    let points = d3.select('#viz').selectAll("circle .nodes")
                 .data(nodes)
                 .enter()
                 .append("svg:circle")
                 .attr('class', (d) => "g"+d.id+" nodes")
                 .attr('id', (d) => d.id)
                 .attr("cx", function(d) { return d.x; })
                 .attr("cy", function(d) { return d.y; })
                 .attr('r', '30')
                 .style('fill','#bed8bf')
                 .style('stroke','none')
                 // .on("mouseover", showLabel)
                 // .on("mouseout", hideLabel)


    let labels = d3.select('#viz').selectAll(".label")
                   .data(nodes)
                   .enter()
                   .append("text")
                   .attr('x', (d) => (d.x-10) )
                   .attr('y', (d) => d.y )
                   .attr('class', (d) => "g"+d.id+" label")
                   .attr('stroke', 'black')
                   .text((d) => d.name)
                  

    function findNodeById(id){
      for (let i = 0; i < nodes.length; i++){
        if(nodes[i].id === id){
            return nodes[i];
        }
      } 
      let dummyNode = {
        x:0,
        y:0, 
        name:null,
        id: null
      }
      return dummyNode;
    }  
    // function showLabel() {
    //     console.log('coming', this)
    //   d3.select('#viz').selectAll('.label')
    //   .data(this)
    //   .enter()
    //   .append('text')
    //   .attr('x', (d) => d.x)
    //   .attr('y', (d) => d.y)
    //   .attr('class', 'label')
    //   .attr('id', 'circleLabel')
    //   .attr('stroke', 'black')
    //   .text((d) => d.name)
    // }
    // function hideLabel(){
    //     console.log('going')
    //     let id = "#circleLabel"
    //   d3.select(id).remove();
    // }

  d3.csv('locusData/Locus_aerospace_edges-Table 1.csv', function(error, data) {
    var edges = data.map((edge) => {
        var startNode = findNodeById(edge.Source);
        var endNode =  findNodeById(edge.Target);
        var edgeObj = {
        x1: startNode.x,
        y1: startNode.y,
        x2: endNode.x,
        y2: endNode.y,
        g: startNode.id
       }
       
       return edgeObj;
    })

    let cords =  d3.select('#viz').selectAll("line .edges")
                 .data(edges)
                 .enter()
                 .append("svg:line")
                 .attr("class", (d)=> "g"+ d.g+ " edges")
                 .attr("x1", function(d) { return d.x1; })
                 .attr("y1", function(d) { return d.y1; })
                 .attr("x2", function(d) { return d.x2; })
                 .attr("y2", function(d) { return d.y2; })
                 .style('color', 'blue')

    
  });
})

