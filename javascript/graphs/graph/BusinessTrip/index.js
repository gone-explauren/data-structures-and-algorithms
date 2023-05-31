'use strict';

function businessTrip(graph, cities) {
  let citiesNodes = graph.getNodes();
  console.log(graph.getNeighbors(citiesNodes[0]));
  let cost = 0;
  for (let i = 0; i < cities.length; i++) {
    let city;
    for(let j=0; j<citiesNodes.length; j++){
      if(citiesNodes[j].data===cities[i]){
        city = citiesNodes[j];
      }
    }
    if (city) {
      let edges = graph.getNeighbors(city);
      if (edges) {
        let neighborCityNames = edges.map(edge => edge.node.data);
        if (cities[i + 1]) {
          if (neighborCityNames.includes(cities[i + 1])) {
            let singleEdge = edges.filter(edge => edge.node.data === cities[i + 1])[0];
            cost = cost + singleEdge.weight;
          }
          else { return null; }
        }
      }
    }
  }
  return cost;
}

module.exports = { businessTrip };
