'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }
  traverse() {
    let current = this.head;
    while(current) {
      // console.log(current.value);
      current = current.next;
    }
  }
  insert(value) {
    // create the node and add the value
    let newNode = new Node(value);
    // make next of newNode the head
    newNode.next = this.head;
    // move head to newNode
    this.head = newNode;
  }
  includes(value) {
    // start at head
    var node = this.head;
    while (node) {
      if (this.current.value === value) {
        return true;
      }
      // move to next node
      node = node.next;
    }
    return false;
  }
  toString() {
    var node = this.head;
    let values = '';
    while(node) {
      this.current.value.push(values);
      node = node.next;
    }
    return values;
  }
}

// let linkedList = new LinkedList();

// linkedList.head = new Node('River');
// linkedList.head.next = new Node('Shasta');
// linkedList.head.next.next = new Node('Poppy');
// linkedList.head.next.next.next = new Node('McKenzie');
// linkedList.head.next.next.next.next = new Node('Willam');

// linkedList.traverse();

module.exports = LinkedList;
