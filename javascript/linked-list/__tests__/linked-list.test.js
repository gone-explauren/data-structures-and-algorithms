'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Testing the Linked List data structure', () => {
  test('Can successfully instantiate an empty linked list', async () => {

  });

  test('Can properly insert into the linked list', async () => {
    let newNode = await LinkedList.insert({
      value: 'Poppy',
      next: next,
    });
    expect(newNode.value).toEqual('Poppy');
  });

  test('The head property will properly point to the first node in the linked list', async () => {

  });

  test('Can properly insert multiple nodes into the linked list', async () => {

  });

  test('Will return true when finding a value within the linked list that exists', async () => {
    let node = await LinkedList.includes({
      value: 'Poppy',
    });
    expect(node).toEqual(true);
    expect(node.value).toEqual('Poppy');
  });

  test('Will return false when searching for a value in the linked list that does not exist', async () => {
    let node = await LinkedList.includes({
      value: 'River',
    });
    expect(node).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', async () => {
    let string = await LinkedList.toString();
    expect(string).toEqual('Poppy');
  });
})
