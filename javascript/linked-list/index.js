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
      if (current.value === value) {
        return true;
      } else {
        // move to next node
        current = current.next;
      }
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

  append(value) {
    let node = new Node(value);
    if (!this.head) return this.head = node;

    // this code will only run if the above is not true
    let current = this.head;

    while (current.next !== null) {

      current = current.next;
    }

    current.next = node;
  }

  insertBefore(value, valueNext) {
    // keep in mind that the insert() method I wrote earlier always inserts the new value to the FRONT of the list
    // last value added is the head of the list
    let node = new Node(value);
    if (!this.head) return this.head = node;

    // what if the first node is the value we're looking for?
    if (this.head.value === valueNext) {
      let temp = this.head;
      this.head = node;
      node.next = temp;
    }

    let current = this.head;

    // searches the next node in line for valueNext
    // does not search current node.
    while (current.next.value !== valueNext) {
      current = current.next;
    }

    // this is how we preserve the rest of the linked list rather than kicking out everything that comes after the new node
    let temp = current.next;
    current.next = node;
    node.next = temp;
  }

  insertAfter(value, valuePrev) {
    let node = new Node(value);
    if (!this.head) return this.head = node;

    let current = this.head;

    while (current.next.value !== valuePrev) {
      current = current.next;
    }

    let temp = current.next.next;
    current.next.next = node;
    node.next = temp;
  }

  kthFromEnd(k) {
    let current = this.head;
    var totalNodes = 0;
    var count = 0;

    if (k < 0) return 666;

    // count the nodes in the linked list
    while (current !== null) {
      current = current.next;
      totalNodes++;
    }

    // search through the linked list again, this time only up to the full length of the list minus k
    if (totalNodes >= k) {
      current = this.head;
      for (count = 0; count < totalNodes - k; count++) {
        current = current.next;
      }
      return current.value;

    } else {
      // if k is more than the length of the linked list
      return 666;
    }
    // could have also set current = this.tail and traversed backwards using current.previous
  }

  zipLists(list01, list02) {
    const zippedList = new LinkedList();
    let current01 = list01.head;
    let current02 = list02.head;

    // zipper the lists
    while (current01 !== null && current02 !== null) {
      zippedList.append(current01.value);
      zippedList.append(current02.value);
      current01 = current01.next;
      current02 = current02.next;
    }

    // if either list has remaining nodes, append them to zippedList
    while (current01 !== null) {
      zippedList.append(current01.value);
      current01 = current01.next;
    }
    while (current02 !== null) {
      zippedList.append(current02.value);
      current02 = current02.next;
    }

    return zippedList;
}

// // global list -- unused.
// // I ended up building new lists for each tests :)

// let linkedList = new LinkedList();

// linkedList.head = new Node('River');
// linkedList.head.next = new Node('Shasta');
// linkedList.head.next.next = new Node('Poppy');
// linkedList.head.next.next.next = new Node('McKenzie');
// linkedList.head.next.next.next.next = new Node('Willam');

// linkedList.traverse();

module.exports = LinkedList;
