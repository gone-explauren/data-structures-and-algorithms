'use strict';
// reference: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce>


// .reduce() iterates over an array and returns the last version of the "accumulator" ... in each iteration, based on the value and/or idx of the current element in the array, you have the opportunity to modify and return the accumulator. After the last iteration of the array, that accumulator value is returned to the caller. initialvalue represents the value of the accumulator in the first iteration.


// Add up all the numbers in an array In this example, the accumulator starts out as 0 (the initial value) and for each iteration, we simply add onto it, and then return it. That return value gets fed into the next iteration so that you can continually operate on it and return the final value.

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function (accumulator, value, idx) {
  accumulator = accumulator + value;
  return accumulator;
}, 0);

// sum would be 10


// Change the shape of you data In this example, we'll take an array of objects and return back an object, keyed by the 'name' property. The initial value is an empty object, and as we iterate, we create a new entry in it, returning it as we build on.

let people = [
  { name: 'Fred', role: 'Developer' },
  { name: 'Suzy', role: 'Developer' },
  { name: 'Gina', role: 'Manager' },
  { name: 'Jim', role: 'Support' }
];

let folks = people.reduce((accumulator, person, idx) => {
  accumulator[person.name] = person.role;
  return accumulator;
}, {});

// folks:
{
  Fred: 'Developer',
    Suzy: 'Developer',
      Gina: 'Manager',
        Jim: 'Support'
}



let numbers = [2, 7, 5, 8, 4];

let total = numbers.reduce((runningTotal, currentNumber) => {
  console.log(runningTotal, currentNumber);
  return currentNumber;
  // 0 is the initial value we set, and it is being compared to the next number in the array
}, 0);


let total = numbers.reduce((runningTotal, currentNumber) => {
  console.log(runningTotal, currentNumber);
  return currentNumber + runningTotal
}, 7);

console.log('total: ', total);



let strings = ['r', 'e', 'd', 'u', 'c', 'e']

let newStr = strings.reduce((collectedString, string) => {
  return collectedString + string
}, 'Let\'s ');

console.log(newStr)

const numbers = [1, 2, 3, 4, 5, 6, 7];

const newthing = numbers.reduce((accumulator, val, idx) => {
  return accumulator + val;
}, 100);

console.log(newthing);



const pokemon = [{ 'url': 'https://pokeapi.co/api/v2/pokemon/1/', 'name': 'bulbasaur' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/2/', 'name': 'ivysaur' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/3/', 'name': 'venusaur' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/4/', 'name': 'charmander' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/5/', 'name': 'charmeleon' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/6/', 'name': 'charizard' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/7/', 'name': 'squirtle' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/8/', 'name': 'wartortle' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/9/', 'name': 'blastoise' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/10/', 'name': 'caterpie' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/11/', 'name': 'metapod' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/12/', 'name': 'butterfree' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/13/', 'name': 'weedle' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/14/', 'name': 'kakuna' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/15/', 'name': 'beedrill' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/16/', 'name': 'pidgey' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/17/', 'name': 'pidgeotto' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/18/', 'name': 'pidgeot' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/19/', 'name': 'rattata' }, {
  'url': 'https://pokeapi.co/api/v2/pokemon/20/', 'name': 'raticate'
}];

// Return an indexed object (name:url)
const indexed = pokemon.reduce((acc, val, idx) => {
  acc[val.name] = val.url;
  return acc;
}, {});

console.log(indexed);

// Return an array of their names
const names = pokemon.reduce((acc, val, idx) => {
  acc.push(val.name);
  return acc;
}, []);

console.log(names);
