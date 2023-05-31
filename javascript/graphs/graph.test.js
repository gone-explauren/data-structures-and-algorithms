'use strict';

const {
  Graph, breadthFirst, depthFirst
} = require('./graph/index.js');
const { businessTrip } = require ('./graph/BusinessTrip/index.js')

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

describe('Traverse a graph breadth first', () => {
  let graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);
  graph.addNode(4);
  graph.addNode(5);
  graph.addNode(6);

  let nodes = graph.getNodes();
  let node1 = nodes[0];
  let node2 = nodes[1];
  let node3 = nodes[2];
  let node4 = nodes[3];
  let node5 = nodes[4];
  let node6 = nodes[5];

  graph.addEdge(node1, node2);

  graph.addEdge(node2, node1);
  graph.addEdge(node2, node3);
  graph.addEdge(node2, node4);

  graph.addEdge(node3, node2);
  graph.addEdge(node3, node4);
  graph.addEdge(node3, node5);
  graph.addEdge(node3, node6);

  graph.addEdge(node4, node2);
  graph.addEdge(node4, node3);
  graph.addEdge(node4, node6);

  graph.addEdge(node5, node3);
  graph.addEdge(node5, node6);

  graph.addEdge(node6, node3);
  graph.addEdge(node6, node4);
  graph.addEdge(node6, node5);

  test('Should be able to perform a breadth first traversal', () => {
    let arr = breadthFirst(node1, graph);
    let vals = arr.map(node => node.data);
    console.log(vals);
    expect(vals).toEqual([1,2,3,4,6,5]);
  });
});

describe('Traverse a graph depth first', () => {
  let graph = new Graph();
  graph.addNode('A');
  graph.addNode('B');
  graph.addNode('C');
  graph.addNode('D');
  graph.addNode('E');
  graph.addNode('F');
  graph.addNode('G');
  graph.addNode('H');

  let nodes = graph.getNodes();
  let nodeA = nodes[0];
  let nodeB = nodes[1];
  let nodeC = nodes[2];
  let nodeD = nodes[3];
  let nodeE = nodes[4];
  let nodeF = nodes[5];
  let nodeG = nodes[6];
  let nodeH = nodes[7];

  graph.addEdge(nodeA, nodeB);
  graph.addEdge(nodeA, nodeD);

  graph.addEdge(nodeB, nodeA);
  graph.addEdge(nodeB, nodeC);
  graph.addEdge(nodeB, nodeD);

  graph.addEdge(nodeC, nodeB);
  graph.addEdge(nodeC, nodeG);

  graph.addEdge(nodeD, nodeA);
  graph.addEdge(nodeD, nodeB);
  graph.addEdge(nodeD, nodeE);
  graph.addEdge(nodeD, nodeH);
  graph.addEdge(nodeD, nodeF);

  graph.addEdge(nodeE, nodeD);

  graph.addEdge(nodeF, nodeD);
  graph.addEdge(nodeF, nodeH);

  graph.addEdge(nodeG, nodeC);

  graph.addEdge(nodeH, nodeD);
  graph.addEdge(nodeH, nodeF);

  test('Should be able to perform a breadth first traversal', () => {

    expect(graph.graphDepthFirst(nodeA)).toEqual(['A','B','C','G','D','E','H','F']);
  });
});

describe('Graphs BusinessTrip', () => {
  let graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);
  graph.addNode(4);
  graph.addNode(5);
  graph.addNode(6);

  let nodes = graph.getNodes();
  let node1 = nodes[0];
  let node2 = nodes[1];
  let node3 = nodes[2];
  let node4 = nodes[3];
  let node5 = nodes[4];
  let node6 = nodes[5];

  graph.addEdge(node1, node2, 150);

  graph.addEdge(node2, node1);
  graph.addEdge(node2, node3);
  graph.addEdge(node2, node4, 50);

  graph.addEdge(node3, node2);
  graph.addEdge(node3, node4);
  graph.addEdge(node3, node5);
  graph.addEdge(node3, node6);

  graph.addEdge(node4, node2);
  graph.addEdge(node4, node3);
  graph.addEdge(node4, node6);

  graph.addEdge(node5, node3);
  graph.addEdge(node5, node6);

  graph.addEdge(node6, node3);
  graph.addEdge(node6, node4);
  graph.addEdge(node6, node5);

  test('Should be able to get the cost of a trip (edge sum for node data array being passed in)', () => {

    expect(businessTrip(graph, [1, 2, 4])).toEqual(200);
  });
  test('Should return null if that trip doesnt exist', () => {

    expect(businessTrip(graph, [1, 3])).toEqual(null);
  });
});
