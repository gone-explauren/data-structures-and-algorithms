'use strict';

const LinkedList = require('../LinkedList');

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  set(key, value) {
    let hashValue = this.hash(key);

    if (!this.buckets[hashValue]) {
      this.buckets[hashValue] = new LinkedList({[key]: value});
    }
    else {
      this.buckets[hashValue].append({[key]: value})
    }
  }

  get(key) {
    let hashValue = this.hash(key);

    if (!this.buckets[hashValue]){
      return null;
    }
    // imitate the LinkedList method .includes(), but instead of returning a boolean we return the value from the bucket
    else {
      let currentNode = this.buckets[hashValue].head;
      while(currentNode) {
        if (currentNode.value[key]) {
          return currentNode.value;
        }
        else if (currentNode.next) {
          currentNode = currentNode.next
        } else return null;
      }
    }
  }

  has(key) {
    let hashValue = this.hash(key);

    // if there is nothing stored at bucket[hashValue] then we immediately know that the key does not exist within the hash table
    if (!this.buckets[hashValue]) {
      return false;
    }
    // imiate the LinkedList method .includes() but we are only searching for if the key exists in the node's value
    else {
      let currentNode = this.buckets[hashValue].head;
      while(currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        else if (currentNode.next) {
          currentNode = currentNode.next
        } else return false
      }
    }
  }

  keys() {
    let uniqueKeys = [];

    this.buckets.forEach(bucket => {
      // if bucket.head is truthy, then we know that it has a LinkedList as it's value
      if(bucket.head){
        // begin to traverse the linked list
        let currentNode = bucket.head;

        while(currentNode){
          // assuming the value of our bucket.head is an object, it can potentially have more than one key:value pair
          let bucketValueKeys = Object.keys(bucket.head.value);

          // for every key, we check if that key already exists within the 'uniqueKeys' array
          bucketValueKeys.forEach(key => {
            // add the key to the 'uniqueKeys' array if it DOES NOT already exist within the array
            if(!uniqueKeys.includes(key)){
              uniqueKeys.push(key)
            }
          });

          // once we're done iterating through one node of a linkedlist, we check if there is another node following
          if (currentNode.next) {
            currentNode = currentNode.next;
          } else break;
        }

      }
    });

    return uniqueKeys;
  }

  hash(key) {

    key = `${key}`;
    let spreadKey = [...key];

    let hashedKeys = [];

    spreadKey.forEach((k, idx) => {
      hashedKeys.push(`${key}`.charCodeAt(idx))
    })

    return hashedKeys.reduce((previousValue, currentValue) => previousValue * currentValue, 1) * 599 % this.buckets.length;

  }

}

function firstDupe(str){
  let regex = /,|\.|\?|\!|\:|\;/gm;
  let newStr = str.toLowerCase().replace(regex, '');
  let map = {};

  let words = newStr.split(' ');
  for(let i=0; i<words.length; i++){
    if(map[words[i]]){
      return words[i];
    }
    map[words[i]] = 1;
  }
  return 'No Matches';
}

function leftJoin (map1, map2) {
  let results = [];
  let keys = getKeys(map1, map2);
  for(let i=0; i<keys.length; i++){
    let keyVals = [keys[i], null, null];
    if(map1[keys[i]]){
      keyVals[1] = map1[keys[i]];
    }
    if(map2[keys[i]]){
      keyVals[2] = map2[keys[i]];
    }
    results[i] = keyVals;
  }
  return results;
}

function getKeys (map1, map2) {
  let keys = Object.keys(map1);
  let keys2 = Object.keys(map2);
  for(let i=0; i<keys2.length; i++){
    if(!map1[keys2[i]]){
      keys.push(keys2[i]);
    }
  }
  return keys;
}

module.exports = { HashTable, firstDupe, leftJoin };
