'use strict';

class Graph {
  constructor(){
    this.adjacencies = new Map();
    this.size = 0;
  }

  addNode(val){
    let node = new Node(val);
    this.adjacencies.set(node, []);
    this.size++;
    return node;
  }

  addEdge(node1, node2, weight=0){
    if(this.adjacencies.has(node1)){
      let adjacencies = this.adjacencies.get(node1);
      adjacencies.push(new Edge(node2, weight));
      return adjacencies;
    }
    return null;
  }

  getNodes(){
    return [...this.adjacencies.keys()];
  }

  getNeighbors(node){
    return this.adjacencies.get(node);
  }

  size(){
    return this.size;
  }
}

class Node {
  constructor(data){
    this.data = data;
  }
}

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

function breadthFirst(node, graph) {
  let nodes = [];

  function traverse(node1) {
    let nodesIncludesCurrentNode = false;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] === node1) {
        nodesIncludesCurrentNode = true;
      }
    }

    if (!nodesIncludesCurrentNode) { // meaning we've never traversed this exact node
      nodes = [...nodes, node1];
      let edges = graph.getNeighbors(node1);
      console.log('Edges of Node', node1.data, ':', edges);
      for (let i = 0; i < edges.length; i++) {
        traverse(edges[i].node);
      }
    }
  }
  traverse(node);

  return nodes;
}

function depthFirst(node, arr=[]){
  arr.push(node.data);
  let edges = this.getNeighbors(node);
  edges.forEach(neighbor => {
    if(!arr.includes(neighbor.node.data)){
      this.graphDepthFirst(neighbor.node, arr);
    }
  });
  return arr;
}

module.exports = {
  Graph, breadthFirst, depthFirst
};
