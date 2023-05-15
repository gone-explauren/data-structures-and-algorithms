'use strict';

const {HashTable} = require('./HashTable');

describe('Testing Hash Table', () => {
  test('Should create a new hash table', () => {

    let table = new HashTable(10);

    table.set('name', 'Lindsay');
    table.set('name', 'Jessie');
    table.set('animal', 'horse');
    console.log(table.get('name').head.value.name);
    console.log(table.keys());

    expect(table.get('name').head.value.name).toEqual('Lindsay');
    expect(table.get('name').head.next.value.name).toEqual('Jessie');
    expect(table.get('test')).toBeFalsy();
    expect(table.keys()).toEqual(' 3 4');
  });
});
