d3.csv('locusData/Locus_aerospace_nodes-Table 1.csv', (error, data) => {
        // console.log('nodes', data)
        // let dots = d3.select('#viz').selectAll('circle')
        //             .data(data)
        //             .enter()
        //             .append('circle')
        //             .attr('r', 5)
        //             .attr('cx', (node) => node.id * 5)
        //             .attr('cy', (node) => node.id * 20)
  
})
d3.csv('locusData/Locus_aerospace_edges-Table 1.csv', function(error, data) {
        console.log('edges',data);
        // data.forEach((el) => {
        //   d3.select('#viz').append('line').attr('x1', () => el.Source).attr('y1', 50).attr('x2', () =>  el.Target).attr('y2', 150).style('stroke', 'dimgray');
        // })
        // d3.select('#viz').selectAll('line')
        // .data(data)
        // .enter()
        // .append('line')
        // .attr('x1', (edge) => +edge.Source)
        // .attr('y1', (edge) => +edge.Source)
        // .attr('x2', (edge) => +edge.Target +30)
        // .attr('y2', (edge) => +edge.Target+30)
        // .style('stroke', 'green')
  let edges = data.map((edge) => d3.select('#viz').append('line'))
  console.log('lines?', edges)
  console.log('PLEASE REFLECT CHANGES')
  // edges.attr('x1', (edge) => parseInt(edge.Source));
  // edges.attr('y1', (edge) => parseInt(edge.Source));
  // edges.attr('x2', (edge) => parseInt(edge.Target));
  // edges.attr('y2', (edge) => parseInt(edge.Target));
  // edges.style('stroke', 'green');

});