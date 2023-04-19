'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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

  appendFront (val) {
    let node = new Node(val);
    if(this.size===0){
      this.head = node;
      this.end = node;
      this.size = 1;
    }
    else{
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size = this.size + 1;
    }
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

  zipLists(listToMerge) {
    const zippedList = new LinkedList();
    let current01 = this.head;
    let current02 = listToMerge.head;

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
}

class Stack {
  constructor (){
    this.items = new LinkedList();
  }

  push (val){
    this.items.appendFront(val);
  }

  pop (){
    if(this.items.head){
      let val = this.items.head.data;
      this.items.head = this.items.head.next;
      if(this.items.head){this.items.head.prev = null;}
      this.items.size--;
      return val;
    }else{return 'Exception: Empty Stack';}
  }

  peek (){
    if(this.items.head){
      return this.items.head.data;
    }else{return 'Exception: Empty Stack';}
  }

  isEmpty (){
    return this.items.size ? false : true;
  }
}

class Queue {
  constructor (){
    this.items = new LinkedList();
  }

  enqueue (val){
    return this.items.append(val);
  }

  dequeue (){
    if(this.items.head){
      let val = this.items.head.data;
      this.items.head = this.items.head.next;
      if(this.items.head){this.items.head.prev = null;}
      this.items.size--;
      return val;
    }else{return 'Exception: Empty Queue';}
  }

  peek (){
    if(this.items.head){
      return this.items.head.data;
    }else{return 'Exception: Empty Queue';}
  }

  isEmpty (){
    return this.items.size ? false : true;
  }
}

class PseudoQueue {

  constructor() {
    this.rear = null;
    this.front = null;
    this.stack1 = new Stack(); // rear of the pseudoQueue
    this.stack2 = new Stack(); // front of the pseudoQueue
    this.length = 0;
  }

  enqueue(value){
    this.stack1.push(value);
    this.rear = this.stack1.top;
    this.length = this.stack1.length + this.stack2.length;
    return this;
  }

  dequeue(){
    let poppedVal;

    if (this.stack2.length){
      poppedVal = this.stack2.pop();
      this.front = this.stack2.top;
      this.length = this.stack1.length + this.stack2.length;
    }

    else if (this.length === 0) {
      throw Error('Nothing to dequeue, empty queue');
    }

    else if(this.stack2.length === 0) {
      // move the nodes from stack1 to stack2 oneby one
      // until the last node is on the top of stack2
      while(this.stack1 .length > 0){
        this.stack2.push(this.stack1.top.value);
        this.stack1.pop();
      }
      console.log(this.stack2);
      poppedVal=this.stack2.pop();
      this.length = this.stack1.length + this.stack2.length;
    }

    return poppedVal;
  }
}

// this is the code I wrote, but I realise it does not account for if there are multiple unmatched brackets
// the code I found online was hard to understand, ask for help in class tomorrow
function validateBrackets(str){
  if(str.includes('(') || str.includes(')') || str.includes('{') || str.includes('}') || str.includes('[') || str.includes(']')){
    if(str.includes('(') && !str.includes(')')){
      return ('This string needs a closing parethesis');
    }
    if(str.includes(')') && !str.includes('(')){
      return ('This string needs a opening parethesis');
    }
    if(str.includes('[') && !str.includes(']')){
      return ('This string needs a closing bracket');
    }
    if(str.includes(']') && !str.includes('[')){
      return ('This string needs a opening bracket');
    }
    if(str.includes('{') && !str.includes('}')){
      return ('This string needs a closing curly bracket');
    }
    if(str.includes('}') && !str.includes('{')){
      return ('This string needs a opening curly bracket');
    }
  } else {
    return ('This string contains no brackets');
  }
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

module.exports = {
  LinkedList,
  Stack,
  PseudoQueue,
  Queue,
  validateBrackets
};
