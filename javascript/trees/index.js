'use strict';
const { Queue } = require('../linked-list/index.js');

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(){
    let result = [];
    let traverse = (node) =>{
      result.push(node.data);
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  inOrder(){
    let result = [];
    let traverse = (node) =>{
      if(node.left){
        traverse(node.left);
      }
      result.push(node.data);
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  postOrder(){
    let result = [];
    let traverse = (node) =>{
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
      result.push(node.data);
    };
    traverse(this.root);
    return result;
  }

  findMax() {
    let node = this.root;
    let max = -1;

    let visited = new Queue();
    visited.enqueue(node);
    while (!visited.isEmpty()) {
      let current = visited.dequeue();
      if (current !== null) {
        if (current.value > max) {
          max = current.value;
        }
        if (current.left) {
          visited.enqueue(current.left);
        }
        if (current.right) {
          visited.enqueue(current.right);
        }
      }
    }
    return max;
  }

  breadthFirstKary(node) {
    let visited = new Queue();
    visited.enqueue(node);
    while (!visited.isEmpty()) {
      let current = visited.dequeue();
      if (current.children) {
        for (let i = 0; i < current.children.length; i++) {
          visited.enqueue(current.children[i]);
        }
      }
    }
  }
}

class BinarySearchTree extends BinaryTree {

  add(val){
    let node = new Node(val);
    let curr = this.root;
    if(!curr){ //if no root node
      this.root = node;
    }
    else{ //root node exists
      while(curr){
        if(val > curr.data){
          if(curr.right){
            curr = curr.right;
          }else{
            curr.right = node;
            break;
          }
        }
        else{
          if(curr.left){
            curr = curr.left;
          }else{
            curr.left = node;
            break;
          }
        }
      }
    }
  }

  contains(val){
    let curr = this.root;
    if(!curr){ //if no root node
      return false;
    }
    else{ //root node exists
      while(curr){
        if(val > curr.data){
          if(curr.right){
            curr = curr.right;
          }
          else{return false;}
        }
        else if(val<curr.data){
          if(curr.left){
            curr = curr.left;
          }else{return false;}
        }
        else{return true;}
      }
    }
  }
}

function breadthFirst(tree){
  let arrQueue = [];
  let returnArr = [];
  arrQueue.push(tree.root);

  while(arrQueue[0]){
    let current = arrQueue.shift();
    returnArr.push(current.data);
    if(current.left){
      arrQueue.push(current.left);
    }
    if(current.right){
      arrQueue.push(current.right);
    }
    console.log(returnArr);
  }

  return returnArr;

}

function treeFizzBuzz (tree) {
  let traverse = (node) => {
    if(node.data%3===0 && node.data%5===0){
      console.log(node.data, 'is divisible by 5 and 3, now FizzBuzz');
      node.data = 'FizzBuzz';
    }
    else if(node.data%3===0){
      console.log(node.data, 'is divisible by 3, now Fizz');
      node.data = 'Fizz';
    }
    else if(node.data%5===0){
      console.log(node.data, 'is divisible by 5, now Buzz');
      node.data = 'Buzz';
    }
    else{
      let num = node.data;
      node.data = num.toString();
    }

    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(tree.root);
  return tree;
}

function treeIntersection(tree1, tree2) {
  let table = new HashTable();
  let result = [];

  function traverseTree(node) {
    if (!node) return;

    table.set(node.value, true)

    traverseTree(node.left);
    traverseTree(node.right);
  }

  function findDuplicates(node) {
    if (!node) return;

    if (table.get(node.value)) {
      result.push(node.value);
    }

    findDuplicates(node.left);
    findDuplicates(node.right);
  }

  traverseTree(tree1.root);
  findDuplicates(tree2.root);

  return result;
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
  breadthFirst,
  treeFizzBuzz,
  treeIntersection
};
