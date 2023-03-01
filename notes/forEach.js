'use strict';

// The forEach() method executes a provided function once for each array element.


// example 1
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


// example 2
let arr = [1, 2, 3];

let newArr = [];

// old way...
for (i = 0; i < arr.length; i++) {
	newArr.push(arr[i]);
};

// new way...
// "num" is a filler name, and this veriable does not exist outside of this function
arr.forEach((num) => {
	newArr.push(num);
});

// alternative...
let addToArray = (num) => {
	newArr.push(num);
};
arr.forEach(addToArray);


console.log(newArr);
