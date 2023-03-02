'use strict';

let nums = [4, 1, 5, 3, 2];

nums.sort();
// sorts the array in lexigraphical order

// will ONLY look at the fist integer in the number unless told to do otherwise
let moreNums = [2, 32, 77, 142, 8];

// moreNums.sort();
// will return [142, 1, 32, 7, 8];

//so instead...
moreNums.sort((a,b) => a - b);
// this works but is confusing, so just accept this is how you do it.
// the 'a-b' will order the nums from low to high, 'b-a' would do high to low


// with strings:
const months = ['March', 'Jan', 'Feb', 'april'];

// months.sort();
// will return 'april' at the end, because lowercase comes after capital letters in alphebetical order

// to get around this, use a callback function .toLowerCase
months.sort((a,b) => {
  if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
    return -1;
  }
  if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
    return 1;
  }
  return;
});
