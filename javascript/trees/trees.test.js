'use strict';

// Require our linked list implementation
const {BinarySearchTree} = require('./index');

describe('Code Challenge 14: BinarySearchTree', () => {
  test('Should add nodes to the correct places in a BST', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(6);
    tree.add(13);

    expect(tree.inOrder()).toEqual([5,6,10,13,15]);
    expect(tree.preOrder()).toEqual([10,5,6,15,13]);
    expect(tree.postOrder()).toEqual([6,5,13,15,10]);
    expect(tree.contains(5)).toEqual(true);
  });

});
