'use strict';

const LinkedList = require('../LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    //* convert our string into a number, using the ascii value.
    let sum = 0;
    for (let idx in key) {
      sum += key.charCodeAt(idx);
    }

    //  * multiply by some large prime number.
    //* return the modulo of the size by the large number.
    return (sum * 599) % this.size;
  }

  set(key, value) {
    let position = this.hash(key);

    // check if our bucket is empty or not
    if (!this.buckets[position]) {
      this.buckets[position] = new LinkedList();
    }

    let entry = {[key]: value};
    this.buckets[position].add(entry);
  }

  /**
   * @param {string} key
   */
  get(key) {
    let intKey = this.hash(key);
    return this.buckets[intKey];
  }

  has(key){
    let intKey = this.hash(key);
    if(this.buckets[intKey]){
      return true;
    }
    return false;
  }

  keys(){
    let str = '';
    for(let i in this.buckets){
      if(this.buckets[i]){
        str = str+ ' '+ i;
      }
    }
    return str;
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

module.exports = { HashTable, firstDupe };
