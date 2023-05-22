'use strict';

const { Graph } = require('./graph/index.js');

describe('Testing graphs', () => {
  let graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);
  graph.addNode(4);

  let nodes = graph.getNodes();

  test('Should be able to add nodes and get nodes', () => {
    expect(graph.getNodes()[0].data).toEqual(1);
  });

  graph.addEdge(nodes[0], nodes[1]);

  test('Should be able to add edges and check neighbors', () => {
    expect(graph.getNeighbors(nodes[0])[0].node.data).toEqual(2);
  });

  test('Should be able to check the size of the graph', () => {
    expect(graph.size()).toEqual(4);
  });
});
