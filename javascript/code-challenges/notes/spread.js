'use strict';

let pets = ['Willam', 'Mckenzie', 'Poppy'];
let copyPets = pets;
console.log('pets: ', pets);
console.log('copyPets: ', copyPets);
// pet and copyPets array are the same


copyPets.push('Shasta');
copyPets.push('River');

console.log('copyPets: ', copyPets);
console.log('pets: ', pets);
// it pushed not only to copyPets, but to pets as well! Why??


// To solve this problem, use a spread operator:
let realCopyPets = [... pets];
realCopyPets.push('Rogue');
console.log('realCopyPets: ', realCopyPets);
console.log('pets: ', pets);
// now Rogue is pushed only to the realCopyPets array and not the original pets array
// love you sweet boy Rogue <3
