'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Testing the Linked List data structure', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    let node = LinkedList.insert({
      value: 'Poppy',
    });
    expect(node.value).toEqual('Poppy');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert({
      value: 'Willam',
    });
    list.insert({
      value: 'McKenzie',
    });
    // console.log(list.head);
    expect(list.head.value).toEqual('McKenzie');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insertVal('value');
    list.insertVal('value2');
    // console.log(list);
    expect(list.head.next).toBeTruthy();
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insertVal(8);
    list.insertVal(0);
    // console.log(list);
    expect(list.includeVal(8)).toEqual(true);
    expect(list.includeVal(0)).toEqual(true);
    expect(list.includeVal(80)).toEqual(false);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let node = LinkedList.includes({
      value: 'River',
    });
    expect(node.includes(Shasta)).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list',() => {
    let list = new LinkedList();
    list.insert({
      value: 'Poppy',
    });
    list.insert({
      value: 'bell',
    });
    list.insert({
      value: 'mirror',
    });
    list.insert({
      value: 'almond',
    });
    // console.log(list);
    console.log(list.toString());
    expect(list.toString()).toEqual('{ Poppy } -> { bell } -> { mirror } -> { almond } -> { null }');
  });

});
