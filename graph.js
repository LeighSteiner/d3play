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
          let stroke, fill
          if(node.Activity[0] == '1'){
            stroke = '#232802'
          }else if(node.Activity[0] == '2'){
            stroke = '#4b5601'
          }else if(node.Activity[0] == '3'){
            stroke = '#9bb203'
          }else{
            stroke =  '#dffc1e'
          }
          if(node.Object[0] == 'B'){
            fill = '#ebf9e8'
          }else if(node.Object[0] == 'C'){
            fill = '#aad6a0'
          }else if(node.Object[0] == 'D'){
            fill = '#407534'
          }else{
            fill = '#2b9613'
          }
            return {
              "x" : x, 
              "y" : y,
              "name": node.label, 
              "id": node.id,
              stroke: stroke,
              fill: fill,
            }

        })

    let points = d3.select('#viz').selectAll("circle .nodes")
                 .data(nodes)
                 .enter()
                 .append("svg:circle")
                 .attr('class', (d) => "g"+d.id+" nodes")
                 .attr('id', (d) => d.id)
                 .attr("cx", (d) => d.x)
                 .attr("cy", (d) => d.y)
                 .attr('r', '30')
                 .style('fill', (d) => d.fill )
                 .style('stroke',(d) => d.stroke )
                 .style('stroke-width', '3')
                 .on("mouseover", (d) => {
                    let id = ".g"+d.id
                    show(id)
                 })
                 .on("mouseout", (d) => {
                    let id = ".g"+d.id 
                    hide(id)
                 })


    let labels = d3.select('#viz').selectAll(".label")
                   .data(nodes)
                   .enter()
                   .append("text")
                   .attr('x', (d) => (d.x-10) )
                   .attr('y', (d) => d.y + 60 )
                   .attr('class', (d) => "g"+d.id+" label")
                   .attr('stroke', '#28440c')
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
    function show(group) {
     let selection = d3.selectAll(group)
     .classed("makeViz", true)
    }
    function hide(group){
     d3.selectAll(group)
     .classed("makeViz", false)
    }

  d3.csv('locusData/Locus_aerospace_edges-Table 1.csv', function(error, data) {
    var edges = data.map((edge) => {
        var startNode = findNodeById(edge.Source);
        var endNode =  findNodeById(edge.Target);
        var edgeObj = {
            x1: startNode.x,
            y1: startNode.y,
            x2: endNode.x,
            y2: endNode.y,
            g: startNode.id,
            endLabel: endNode.name
       }

       //handling overlap/view control
       if(edgeObj.x1 > edgeObj.x2){
        edgeObj.x1 = edgeObj.x1 -30;
       }else{
        edgeObj.x1 = edgeObj.x1 +30;
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
                 .attr('stroke', "#172b03")
                 .attr('width', '2px')
                 // .style('color', 'blue')

    //for full relational visibility 
    let endLabels = d3.select('#viz').selectAll('.endLabel')
                     .data(edges)
                     .enter()
                     .append("text")
                     .attr("class", (d) => "g"+d.g+" endLabel")
                     .attr('x', (d) => (d.x2-40 ) )
                     .attr('y', (d) => d.y2+ 60 )
                     .text((d) => d.endLabel)
                     .attr('stroke','#3f7a04')


    
  });

  
})

