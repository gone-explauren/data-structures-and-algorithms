'use strict';

const AnimalShelter = require('./index.js');
let shelter = new AnimalShelter();

describe('Testing animal shelter adoption enqueue and dequeue', ()=>{

  let dog1 = {
    name: 'Pansy',
    species: 'dog'
  };
  let cat2 = {
    name: 'Cookie',
    species: 'cat'
  };

  xtest('Can successfully add new animals to the shelter', ()=>{
    shelter.enqueue(dog1);
    expect(shelter.queue.front.value.name).toEqual(dog1.name);
    shelter.enqueue(cat2);
    // console.log(shelter.queue);
    expect(shelter.queue.back.value.name).toEqual(cat2.name);
  });

  xtest('Should throw error if the species is not a dog or a cat', ()=>{
    let cobra = {
      name: 'Slinky',
      species: 'snake'
    };
    expect(() => shelter.enqueue(cobra)).toThrow();
  });

  xtest('Can dequeue animal if mathes preference input', ()=>{
    let pref = {
      species: 'dog',
    };
    let frontVal = shelter.queue.front.value;
    let dequeued = shelter.dequeue(pref);
    // console.log(dequeued);
    expect(dequeued).toEqual(frontVal);
  });

  xtest('If animal requested is not a dog or a cat, should return the animal that has stayed in the shelter the longest', ()=>{
    let pref = {
      species: 'penguin',
    };
    console.log(shelter.queue);
    let frontVal = shelter.queue.front;
    let dequeued = shelter.dequeue(pref);
    console.log(dequeued);
    expect(dequeued).toEqual(frontVal);
  });
});
