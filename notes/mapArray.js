'use strict';

// reference:
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>
// this code challenge is about the map() method that creates a new array, not the Map JavaScript Object.

// map() will take everything from an old array, makes changes to it, and spits out a new array

let arr = [1, 2, 3];
let stringArr = ['one', 'two', 'three'];

// let newArr = arr.map(num => {
//   return num * 5;
// });

// // or...

let newArr = arr.map(num => num * 5);
// // return is implied

console.log(newArr);

let newStrArr = stringArr.map(str => str.toUpperCase());

console.log(newStrArr);
