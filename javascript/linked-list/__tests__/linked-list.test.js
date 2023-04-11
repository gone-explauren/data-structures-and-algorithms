'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

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
});
