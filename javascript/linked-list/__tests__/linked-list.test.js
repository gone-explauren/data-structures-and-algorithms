'use strict';

// Require our linked list implementation
const { LinkedList, Stack, PseudoQueue, Queue } = require('../index');

describe('Testing the Linked List data structure', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(
      'Poppy'
    );
    expect(list.head.value).toEqual('Poppy');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(
      'Willam'
    );
    list.insert(
      'McKenzie'
    );
    // console.log(list.head);
    expect(list.head.value).toEqual('McKenzie');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert(
      'Benvolio'
    );
    list.insert(
      'Astro'
    );
    // console.log(list);
    expect(list.head.next).toBeTruthy();
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert(8);
    list.insert(0);
    // console.log(list);
    expect(list.includes(8)).toEqual(true);
    expect(list.includes(0)).toEqual(true);
    expect(list.includes(80)).toEqual(false);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(
      'River'
    );
    expect(list.includes('Shasta')).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(
      'Poppy'
    );
    list.insert(
      'bell'
    );
    list.insert(
      'mirror'
    );
    list.insert(
      'almond'
    );
    // console.log(list);
    // console.log(list.toString());
    // because of the way I wrote my insert() method, the last value added is the first value on the list
    expect(list.toString()).toEqual('{ almond } -> { mirror } -> { bell } -> { Poppy } -> { null }');
  });

  test('Can successfully add (one or multiple) node(s) to the end of the linked list', () => {
    let list = new LinkedList();
    // sub problems:

    // this tests that we can add a node if there is none (head)
    list.append(
      'Rogue'
    );
    expect(list.head.value).toEqual('Rogue');
    // this tests that we can add a node to the end if there is a head node.
    list.append(
      'millet'
    );
    // this tests that we can add a node to the end if there are multiple nodes in the list already (function must be recursive, not stop after one if statement;
    expect(list.head.next.value).toEqual('millet');
    list.append(
      'seed'
    );
    expect(list.head.next.next.value).toEqual('seed');
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert(
      'Poppy'
    );
    list.insert(
      'Shasta'
    );
    list.insert(
      'Willam'
    );
    list.insert(
      'McKenzie'
    );
    list.insertBefore('River', 'Shasta');

    // console.log(list);
    // because of the way I wrote my insert() method, the last value added is the first value on the list
    // McKenzie is at the front of the list, Poppy is at the back
    // River should be between Shasta and Willam
    expect(list.head.next.next.value).toEqual('River');
  });

  test('Can successfully insert a node before the first node the linked list', () => {
    let list = new LinkedList();
    list.insert(
      'Astro'
    );
    list.insert(
      'Benvolio'
    );
    list.insertBefore('Jacques', 'Benvolio');

    // console.log(list);
    expect(list.head.value).toEqual('Jacques');
  });

  test('Can successfully insert a node after a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert(
      'Poppy'
    );
    list.insert(
      'Shasta'
    );
    list.insert(
      'Willam'
    );
    list.insert(
      'McKenzie'
    );
    list.insertAfter('River', 'Willam');

    // console.log(list);
    // River should be between Shasta and Willam
    expect(list.head.next.next.value).toEqual('River');
  });

  test('Can successfully insert a node after the last node the linked list', () => {
    let list = new LinkedList();
    list.insert(
      'Astro'
    );
    list.insert(
      'Benvolio'
    );
    list.insertAfter('Jacques', 'Astro');

    // console.log(list);
    expect(list.head.next.next.value).toEqual('Jacques');
  });

  test('Sends an error when k is greater than the length of the linked list', () => {
    let list = new LinkedList();
    list.insert(
      'River'
    );
    list.insert(
      'Shasta'
    );
    list.insert(
      'Poppy'
    );

    expect(list.kthFromEnd(4)).toEqual(666);
  });

  test('Retrieves the value of the node on index k when k is the same as the length of the linked list', () => {
    let list = new LinkedList();
    list.insert(
      'River'
    );
    list.insert(
      'Shasta'
    );
    list.insert(
      'Poppy'
    );

    expect(list.kthFromEnd(3)).toEqual('Poppy');
  });

  test('Sends an error when k is not a positive integer', () => {
    let list = new LinkedList();
    list.insert(
      'River'
    );
    list.insert(
      'Shasta'
    );
    list.insert(
      'Poppy'
    );

    expect(list.kthFromEnd(-2)).toEqual(666);
  });

  test('Retrieves the value of the node on index k when the length of the linked list is 1 and k is equal to 1', () => {
    let list = new LinkedList();
    list.insert(
      'River'
    );

    expect(list.kthFromEnd(1)).toEqual('River');
  });

  test('Retrieves the value of the node on index k when index k is in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert(
      'River'
    );
    list.insert(
      'Shasta'
    );
    list.insert(
      'Poppy'
    );
    list.insert(
      'McKenzie'
    );
    list.insert(
      'Willam'
    );

    expect(list.kthFromEnd(3)).toEqual('Poppy');
  });

  test('Can successfully zip two lists of the same length', () => {
    let oregonFriends = new LinkedList();
    let listOG = oregonFriends;
    listOG.insert(
      'Brandon'
    );
    listOG.insert(
      'Justin'
    );
    listOG.insert(
      'Kayl'
    );

    let coloradoBuds = new LinkedList();
    let listToMerge = coloradoBuds;
    listToMerge.insert(
      'Teresa'
    );
    listToMerge.insert(
      'Sara'
    );
    listToMerge.insert(
      'Casey'
    );
    // don't forget that my insert() method adds new nodes to the front of the list, so the list will be reversed from what is intuitive
    const zippedList = listOG.zipLists(listToMerge);
    expect(zippedList.head.value).toBe('Kayl');
    expect(zippedList.head.next.value).toBe('Casey');
    expect(zippedList.head.next.next.value).toBe('Justin');
    expect(zippedList.head.next.next.next.value).toBe('Sara');
    expect(zippedList.head.next.next.next.next.value).toBe('Brandon');
    expect(zippedList.head.next.next.next.next.next.value).toBe('Teresa');
    expect(zippedList.head.next.next.next.next.next.next).toBeNull();
  });

  test('Can successfully zip two lists when listOG is longer than listToMerge', () => {
    let oregonFriends = new LinkedList();
    let listOG = oregonFriends;
    listOG.insert(
      'Brandon'
    );
    listOG.insert(
      'Justin'
    );
    listOG.insert(
      'Kayl'
    );
    listOG.insert(
      'Missy'
    );

    let coloradoBuds = new LinkedList();
    let listToMerge = coloradoBuds;
    listToMerge.insert(
      'Teresa'
    );
    listToMerge.insert(
      'Sara'
    );
    listToMerge.insert(
      'Casey'
    );
    const zippedList = listOG.zipLists(listToMerge);
    expect(zippedList.head.value).toBe('Missy');
    expect(zippedList.head.next.value).toBe('Casey');
    expect(zippedList.head.next.next.value).toBe('Kayl');
    expect(zippedList.head.next.next.next.value).toBe('Sara');
    expect(zippedList.head.next.next.next.next.value).toBe('Justin');
    expect(zippedList.head.next.next.next.next.next.value).toBe('Teresa');
    expect(zippedList.head.next.next.next.next.next.next.value).toBe('Brandon');
    expect(zippedList.head.next.next.next.next.next.next.next).toBeNull();
  });

  test('Can successfully zip two lists when listOG is shorter than listToMerge', () => {
    let oregonFriends = new LinkedList();
    let listOG = oregonFriends;
    listOG.insert(
      'Brandon'
    );
    listOG.insert(
      'Justin'
    );
    listOG.insert(
      'Kayl'
    );

    let washingtonPals = new LinkedList();
    let listToMerge = washingtonPals;
    listToMerge.insert(
      'Uli'
    );
    listToMerge.insert(
      'Sherry'
    );
    listToMerge.insert(
      'Azhar'
    );
    listToMerge.insert(
      'Salem'
    );
    const zippedList = listOG.zipLists(listToMerge);
    expect(zippedList.head.value).toBe('Kayl');
    expect(zippedList.head.next.value).toBe('Salem');
    expect(zippedList.head.next.next.value).toBe('Justin');
    expect(zippedList.head.next.next.next.value).toBe('Azhar');
    expect(zippedList.head.next.next.next.next.value).toBe('Brandon');
    expect(zippedList.head.next.next.next.next.next.value).toBe('Sherry');
    expect(zippedList.head.next.next.next.next.next.next.value).toBe('Uli');
    expect(zippedList.head.next.next.next.next.next.next.next).toBeNull();
  });

  test('Can successfully zip two empty lists', () => {
    const listOG = new LinkedList();
    const listToMerge = new LinkedList();
    const zippedList = listOG.zipLists(listToMerge);
    expect(zippedList.head).toBeNull();
  });

});

describe('Testing the Stacks data structure', () => {
  test('Should be able to push and peek the top of a stack if a new stack can be created', () => {
    let stack = new Stack();
    stack.push('Bobbie');

    expect(stack.peek()).toEqual('Bobbie');
  });

  test('Testing pop(). Should return true if stack has nodes, and false if the top of a stack is empty', () => {
    let stack = new Stack();
    stack.push('Jack');
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Should be able to pop off the top of a stack that has multiple nodes', () => {
    let stack = new Stack();
    stack.push('Annie');
    stack.push('Shelby');
    stack.push('Sadie');
    expect(stack.peek()).toEqual('Sadie');
    stack.pop();
    expect(stack.peek()).toEqual('Shelby');
    stack.pop();
    expect(stack.peek()).toEqual('Annie');
    stack.pop();
    expect(stack.peek()).toEqual('Exception: Empty Stack');
  });

});

describe('Testing the Queue data structure', () => {
  test('Should be able to enqueue to the end of a newly created Queue', () => {
    let queue = new Queue();
    queue.enqueue('Karma');

    expect(queue.peek()).toEqual(1);
  });

  test('Testing dequeue(). Should return true if queue has nodes, and false if the front of a queue is empty', () => {
    let queue = new Queue('Queenie');
    queue.enqueue();
    expect(queue.isEmpty()).toEqual(false);
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Should be able to dequeue off the end of a queue that has multiple nodes', () => {
    let queue = new Queue();
    queue.enqueue('Kitty');
    queue.enqueue('Twix');
    queue.enqueue('Skittles');
    expect(queue.peek()).toEqual('Kitty');
    queue.dequeue();
    expect(queue.peek()).toEqual('Twix');
    queue.dequeue();
    expect(queue.peek()).toEqual('Skittles');
    queue.dequeue();
    expect(queue.peek()).toEqual('Exception: Empty Queue');
  });
});


describe('Testing PseudoQueue', () => {
  let stack1 = new Stack();
  let stack2 = new Stack();
  let pseudoQueue = new PseudoQueue();

  pseudoQueue.stack1 = stack1;
  pseudoQueue.stack2 = stack2;
  stack1.push(0);
  stack1.push(1); //top of stack1
  stack2.push(10);
  stack2.push(9); //top of stack2

  test('Should enqueue() add a new node to the top of PseudoQueue', ()=>{
    let enqueued = pseudoQueue.enqueue(2);
    // console.log(pseudoQueue);
    expect(enqueued.rear.value).toEqual(pseudoQueue.stack1.top.value);
    expect(pseudoQueue.length).toBe(stack1.length + stack2.length);
  });

  test('Should dequeue() remove a node from PseudoQueue if neither stack1 or stack2 is empty', ()=>{
    let dequeuedVal = stack2.top.value;
    let dequeued = pseudoQueue.dequeue();
    // console.log(pseudoQueue);
    expect(dequeued).toBe(dequeuedVal);
    expect(pseudoQueue.length).toBe(stack1.length + stack2.length);
  });

  test('Should dequeue() remove a node from pseudoQueue if stack2 is empty', ()=>{
    while (stack2.length) {
      stack2.pop();
    }
    let originalLength = stack1.length;
    let dequeued = pseudoQueue.dequeue();
    console.log(dequeued);
    expect(pseudoQueue.length).toBe(originalLength-1);
  });

  test('Should dequeue() throw exception if both stacks are empty', ()=>{
    while(stack1.length || stack2.length){
      if(stack1.length){
        stack1.pop();
      }
      if(stack2.length){
        stack2.pop();
      }
    }

    expect(()=> pseudoQueue.dequeue()).toThrow(Error);

  });
});
