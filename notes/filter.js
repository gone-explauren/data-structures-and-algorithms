'use strict';

// reference: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// this will search through arr and find all the numbers greater than 4, then push them to newArr. It will not change the original array
let newArr = arr.filter((num) => {
  return num > 4;
});

// as a one-liner
let newArr = arr.filter(num => num > 4);
