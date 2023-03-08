'use strict';

// RegEx = Regular Expressions
// recognizes patterns, can be used to find a phone number or an email, has methods to verify

// ** resources: <regex101.com> **
// find Quick References on this site for a list of shortcuts


// Methods:

// .test() - returns true or false
// ex. regex.test(str);

// .match() - treturns an array if there are matches
// -or- it returns null if there are no matches
// * recommendation is to write code to return an empty array if null ** see second example
// ex. str.match(regex)

// .replace() - returns a new string with matched replaced by the provided replace


// to declare a regex pattern
// let regex - //;
// let str = '';
// let arr = [];
// let obj = {};

// declare a variable (can be named anything)
// looking for letter o
let regex = /o/;
let str = 'The quick brown fox jumps over the lazy dog.';
let hasPattern = regex.test(str);
console.log(hasPattern);


// RegEx flags
// come after the //
// refer to regex101.com for info

// * will select 0 or more of a word, + will select one of more of a word
// \w will select any word, not just words with a w
// refer to regex101.com

// all words with an o, g is a global flag, m is ??
let reg = /\*o\w*/gm;
// if 'null', will evaluate to false, so the || [] will return an empty array in this case
let results = str.match(reg) || [];
console.log(results);


let phoneNum1 = 206-239-8228;
let phoneNum2 = 602-387-4770;

let searchedPhoneNumber = / *(206)/;

let resultingPhoneNumbers = [];

resultingPhoneNumbers.push(phoneNum1.match(searchedPhoneNumber));
resultingPhoneNumbers.push(phoneNum2.match(searchedPhoneNumber));

console.log(resultingPhoneNumbers);
