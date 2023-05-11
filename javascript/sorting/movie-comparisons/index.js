'use strict'

// const Movies = require("./movies")

const comparison = (property) => (a, b) => {

  if (property === 'title') {
    let firstTitle = a.title;
    let secondTitle = b.title;

    // remove 'The ' from the movie titles
    if (firstTitle.match(/(The )/)) {
      firstTitle = firstTitle.slice(4);
    }

    if (secondTitle.match(/(The )/)) {
      secondTitle = secondTitle.slice(4);
    }

    // remove 'An ' from the movie titles
    if (firstTitle.match(/(An )/)) {
      firstTitle = firstTitle.slice(3);
    }

    if (secondTitle.match(/(An )/)) {
      secondTitle = secondTitle.slice(3);
    }

    // remove 'A ' from the movie titles
    if (firstTitle.match(/(A )/)) {
      firstTitle = firstTitle.slice(2);
    }

    if (secondTitle.match(/(A )/)) {
      secondTitle = secondTitle.slice(2);
    }

    if (firstTitle < secondTitle) {
      return -1;
    }
    else if (firstTitle > secondTitle) {
      return 1;
    }
    else {
      return 0;
    }

  } else {
    if (a[property] < b[property]) {
      return -1;
    }
    else if (a[property] > b[property]) {
      return 1;
    }
    else {
      return 0;
    }
  }
};

const sortYear = (movies) => {

  movies.sort(comparison('year'))

  // movies.sort((a, b) => {
  //   if (a.year > b.year) {
  //     return -1
  //   }
  //   else if (a.year < b.year) {
  //     return 1
  //   }
  //   else {
  //     return 0
  //   }
  // })

  return movies;
};

const sortTitle = (movies) => {
  movies.sort(comparison('title'))
  return movies;
};

// sortYear(Movies);
// console.log(Movies);
// sortTitle(Movies);
// console.log(Movies);

module.exports = {
  sortYear,
  sortTitle,
  comparison
};
