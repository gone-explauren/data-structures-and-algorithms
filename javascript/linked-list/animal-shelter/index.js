'use strict';

const Queue = require('../index');

class AnimalShelter {

  constructor () {
    this.queue = new Queue();
  }

  enqueue(animal){
    if (animal.species === 'cat' || animal.species === 'dog') {
      if (animal.name){
        this.queue.enqueue(animal);
      }
      else {
        throw('Please give this animal a name.');
      }
    }
    else {
      throw ('This animal shelter is only accepting cats and dogs for the moment. Please try again later');
    }
    return this;
  }

  dequeue(pref){
    if (pref.species === 'dog' || pref.species === 'cat'){

      let current = this.queue.peak();
      // console.log(current);
      for (let idx=0; idx < this.queue.length; idx++ ) {
        if (current.species === pref.species){
          let temp = this.queue.front;
          this.queue.front = current;
          temp.next = this.queue.front;
          // console.log(this);
          let result = this.queue.dequeue();
          // console.log(result);
          return result;
        }
        else{
          current = current.next;
        }
      }
    }
    else{
      return this.queue.front;
    }
  }
}

module.exports = AnimalShelter;
