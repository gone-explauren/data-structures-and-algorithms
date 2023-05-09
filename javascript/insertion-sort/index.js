'use strict';

function insertionSort (input){
  let sorted = [];
  sorted[0] = input[0];

  for(let i=1; i<input.length; i++){
    insert(sorted, input[i]);
  }
  return sorted;
}

function insert(sorted, val){
  let i = 0;

  while(val > sorted[i]){
    i = i+1;
  }

  while(i < sorted.length){
    let temp = sorted[i];
    sorted[i] = val;
    val = temp;
    i = i + 1;
  }

  sorted[i] = val;
}

module.exports = { insertionSort };
