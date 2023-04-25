'use strict';

// Require our linked list implementation
const {BinarySearchTree, BinaryTree} = require('./index');

describe('Testing binary search tree', () => {
  xtest('Should add nodes to the correct places in a binary search tree', () => {
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

  xtest('Can add values to a BinarySearchTree', () => {
    let node = new Node(5);
    let tree = new BinarySearchTree(node);

    tree.add(3);
    tree.add(7);
    tree.add(10);

    let arr = tree.preOrder(tree.root, []);
    expect(arr).toEqual([5, 3, 7, 10]);

    tree.add(6);
    tree.add(2);
    arr = tree.postOrder(tree.root, []);
    expect(arr).toEqual([2, 3, 6, 10, 7, 5]);
  });

  xtest('Can see if BST contains a value', () => {
    let node = new Node(5);
    let tree = new BinarySearchTree(node);

    tree.add(3);
    tree.add(7);
    tree.add(10);

    expect(tree.contains(7)).toBeTruthy();
    expect(tree.contains(2)).toBeTruthy();
    expect(tree.contains(19)).toBeFalsy();
  });

  xtest('Can get max', () => {
    let node = new Node(5);
    let tree = new BinarySearchTree(node);

    tree.add(3);
    tree.add(7);
    tree.add(10);

    let max = tree.findMax();
    expect(max).toEqual(10);

    tree.root.left.left.left = new Node(15);
    max = tree.findMax();
    expect(max).toEqual(15);

    let binaryTree = new BinaryTree(null);
    max = binaryTree.findMax();
    expect(max).toEqual(-1);
  });

  xtest('Can traverse tree breadth first', () => {
    let node = new Node(5);
    let tree = new BinarySearchTree(node);

    tree.add(8);
    tree.add(6);
    tree.add(10);

    expect(tree.breadthFirst).toEqual(6, 8, 10);
  });

});
