d3.csv('locusData/Locus_aerospace_nodes-Table 1.csv', (error, data) => {
        let xCount = 15;
        let yCount = 10;
        var nodes = data.map((node, ind) => {
          let x 
          let y
          if(ind%10){
            x = xCount;
            y = yCount;
            xCount += 100
          }else{
            x = xCount
            xCount = 15;
            yCount = yCount +80;
            y = yCount
          }
            return {
              x : x, 
              y : y,
              name: node.label, 
              id: node.id
            }

        })
         
    let points = d3.select('#viz').selectAll("circle .nodes")
                 .data(nodes)
                 .enter()
                 .append("svg:circle")
                 .attr("class", "nodes")
                 .attr("cx", function(d) { return d.x; })
                 .attr("cy", function(d) { return d.y; })
                 .attr('r', '5')
     

  
})
d3.csv('locusData/Locus_aerospace_edges-Table 1.csv', function(error, data) {
        console.log('edges',data);
        // data.forEach((el) => {
        //   d3.select('#viz').append('line').attr('x1', () => el.Source).attr('y1', 50).attr('x2', () =>  el.Target).attr('y2', 150).style('stroke', 'dimgray');
        // })
  // let edges = d3.select('#viz').selectAll('line')
  //             .data(data)
  //             .enter()
  //             .append('line')
   
        
  // let edges = data.map((edge) => d3.select('#viz').append('line'))
  

  // edges.attr('y1', (edge) => parseInt(edge.Source));
  // edges.attr('x2', (edge) => parseInt(edge.Target));
  // edges.attr('y2', (edge) => parseInt(edge.Target));
  // edges.style('stroke', 'green');

});