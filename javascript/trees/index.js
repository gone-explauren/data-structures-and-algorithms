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

  breadthFirst(node) {
    let visited = new Queue();
    let arr = [];
    visited.enqueue(node);
    while (!visited.isEmpty()) {
      let current = visited.dequeue();
      arr.push(current.value);
      if (current.left) {
        visited.enqueue(current.left);
      }
      if (current.right) {
        visited.enqueue(current.right);
      }
    }
    return arr;
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

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};
