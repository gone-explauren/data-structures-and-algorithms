'use strict';

const { HashTable, firstDupe, leftJoin } = require('./hashTable/index.js');

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

  test('Should return the first word that is a duplicate', () => {
    let str = '	I had the story, bit by bit, from various people, and, as generally happens in such cases, each time it was a different story.';
    expect(firstDupe(str)).toEqual('bit');

    str = 'Happy families are all alike; every unhappy family is unhappy in its own way';
    expect(firstDupe(str)).toEqual('unhappy');

    str = 'There was a hand in the darkness, and it held a knife.';
    expect(firstDupe(str)).toEqual('a');

    str = 'It was a pleasure to burn.';
    expect(firstDupe(str)).toEqual('No Matches');
  });

  test('Should join and return all keys and associated values', () => {
    let map1 = {
      'River': 'smart birb',
      'Poppy': 'naughty boy',
      'Shasta': 'lil baby',
    };

    let map2 = {
      'River': 'says "I love you"',
      'Poppy': 'says "here kitty kitty"',
    };

    console.log(leftJoin(map1, map2));

    expect(leftJoin(map1, map2)).toEqual([
      [ 'River', 'smart birb', 'says "I love you"' ],
      [ 'Poppy', 'naughty boy', 'says "here kitty kitty' ],
      [ 'Shasta', 'lil baby', null ]
    ]);
  });
});
