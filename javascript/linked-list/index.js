'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while (current) {
      // console.log(current.value);
      current = current.next;
    }
  }

  insert(value) {
    // create the node and add the value
    let node = new Node(value);

    // if there is a node already, it is head...
    if (this.head) {

      // make next of new Node the head
      node.next = this.head;

      // move head to new Node
      this.head = node;

    } else {
      this.head = node;
    }
  }

  includes(value) {
    // start at head
    let current = this.head;

    // current !== null
    while (current) {
      if (this.current.value === value) {
        return true;
      }
      // move to next node
      current = current.next;
    }

    return false;
  }

  toString() {
    let current = this.head;
    let valueStr = `{ ${current.value} }`;

    while (current) {

      current = current.next;

      if (current) {
        valueStr = `${valueStr} -> { ${current.value} }`;

      } else {

        valueStr = `${valueStr} -> { ${current} }`;
      }
    }
    return valueStr;
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
