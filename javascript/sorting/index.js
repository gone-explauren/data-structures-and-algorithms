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

// thanks for the explaination in code review today, Kirk!
// sorts the array only
function mergeSort (arr){
  let n = arr.length;
  if(n>1){

    // find the center of the array push everything left of center to a new array
    let mid = Math.floor(n/2);
    let left = [];
    for(let i=0; i<mid; i++){
      left[i] = arr[i];
    }

    // push everything to the right of and including the center to a different new array
    let right = [];
    let j = 0;
    for(let i=mid; i<arr.length; i++){
      right[j] = arr[i];
      j++;
    }

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}

function merge(left, right, arr){
  let i=0;
  let j=0;
  let k=0;
  while(i<left.length && j<right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i = i+1;
    }
    else{
      arr[k] = right[j];
      j = j+1;
    }
    k = k+1;
  }
  if(i===left.length){
    while(arr[k]){
      arr[k] = right[j];
      k = k+1;
      j = j+1;
    }
  }
  else{
    while(arr[k]){
      arr[k] = left[i];
      k = k+1;
      i = i+1;
    }
  }
}

module.exports = { insertionSort, mergeSort };
