function greet(name) {
  debugger;
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  debugger;
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  debugger;
  console.log(`Registering ${name}!`);
  callback(name);
}

debugger;
registerGuest('Mango', greet); // "Registering Mango!"
// "Welcome Mango!"

registerGuest('Mango', notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

// =================

function registerGuest2(name, callback) {
  debugger;
  console.log(`Registering ${name}!`);
  callback(name);
}

debugger;
registerGuest2(
  'Mango',
  // Передаємо інлайн-функцію greet у якості колбека
  function greet(name) {
    console.log(`Welcome ${name}!`);
  }
);

debugger;
registerGuest2(
  'Poly',
  // Передаємо інлайн-функцію notify у якості колбека
  function notify(name) {
    console.log(`Dear ${name}, your room will be ready in 30 minutes`);
  }
);

// =================

function calculateTotalPrice1(orderedItems) {
  let totalPrice = 0;

  function forEachCallback(orderItem) {
    totalPrice += orderItem;
  }
  orderedItems.forEach(forEachCallback);

  return totalPrice;
}
console.log(calculateTotalPrice2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function calculateTotalPrice2(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function forEachCallback(orderItem) {
    totalPrice += orderItem;
  });

  return totalPrice;
}
console.log(calculateTotalPrice2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// =================

function filterArray1(numbers, value) {
  const arr = [];
  function callback(currentNumber) {
    if (currentNumber > value) {
      arr.push(currentNumber);
    }
  }
  numbers.forEach(callback);
  return arr;
}
console.log(filterArray1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 5));

function filterArray2(numbers, value) {
  const arr = [];
  numbers.forEach(function callback(currentNumber) {
    if (currentNumber > value) {
      arr.push(currentNumber);
    }
  });
  return arr;
}
console.log(filterArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 5));

function filterArray3(numbers, value) {
  const arr = [];
  numbers.forEach(currentNumber => {
    if (currentNumber > value) {
      arr.push(currentNumber);
    }
  });
  return arr;
}
console.log(filterArray3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 5));

// =================

const numbers = [5, 10];

// Звичайна НЕ анонімна функція
numbers.forEach(function logNumberWithIndex(number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Звичайна анонімна функція
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Стрілочна анонімна функція
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

// =================

function changeEvenDirty(numbers, value) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  return numbers;
}
const testArr = [17, 24, 68, 31, 42];
console.log('before', testArr);
console.log('dirty', changeEvenDirty(testArr, 100));
console.log('after', testArr);

function changeEvenClean(numbers, value) {
  const newArr = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArr.push(numbers[i] + value);
    } else {
      newArr.push(numbers[i]);
    }
  }

  return newArr;
}
console.log('clean', changeEvenClean([17, 24, 68, 31, 42], 100));

// =================

const students = [
  { name: 'Mango', courses: ['mathematics', 'physics'] },
  { name: 'Poly', courses: ['science', 'mathematics'] },
  { name: 'Kiwi', courses: ['physics', 'biology'] },
];

const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
console.log(flattenedCourses);

// =============

const values = [51, -3, 27, 21, -68, 42, -37];
console.log(values);

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []
// до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився

// =======

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Tell-Tale Heart',
    author: 'Edgar Allan Poe',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books.filter(book => book.rating >= 8);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

// ===============
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => user.age > minAge && user.age < maxAge);
};

console.log(getUsersWithAge(users, 30, 40));

// ============

const players1 = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players1); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce(
  // callback
  (accumulator, item) => accumulator + item,
  // accumulator init value
  0
);

const averagePlayTime = totalPlayTime / playtimes.length;

// ============

const players2 = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players2.reduce(
  // callback
  (acc, player) => {
    const total = player.playtime / player.gamesPlayed;
    return acc + total;
  },
  // accumulator init value
  0
);

console.log(totalAveragePlaytimePerGame);

// ==============

const scores = [61, 19, 74, 35, 92, 56];
console.log(scores);

const ascendingScores = scores.toSorted((left, right) => {
  console.log(`${left} - ${right} is ${left - right}`);
  return left - right;
});
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ===============

const students2 = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];
console.log(students2);

const inAlphabetOrder = students2.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students2.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// ========

const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Edgar Allan Poe',
  'Howard Lovecraft',
];
console.log(authors);

const authorsInAlphabetOrder = authors.toSorted((left, right) =>
  left.localeCompare(right)
);
console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = authors.toSorted((left, right) =>
  right.localeCompare(left)
);
console.log(authorsInReversedOrder);

// =================

const books2 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Tell-Tale Heart',
    author: 'Edgar Allan Poe',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'Enemy of God',
    author: 'Bernard Cornwell',
    rating: 8.67,
  },
];
console.log(books2);

const sortedByAuthorName = books2.toSorted((bookLeft, bookRight) =>
  bookLeft.author.localeCompare(bookRight.author)
);
console.log(sortedByAuthorName.map(book => book.author));

const sortedByReversedAuthorName = books2.toSorted((bookLeft, bookRight) =>
  bookRight.author.localeCompare(bookLeft.author)
);
console.log(sortedByReversedAuthorName.map(book => book.author));

const sortedByAscendingRating = books2.toSorted(
  (bookLeft, bookRight) => bookLeft.rating - bookRight.rating
);
console.log(sortedByAscendingRating.map(book => book.rating));

const sortedByDescentingRating = books2.toSorted(
  (bookLeft, bookRight) => bookRight.rating - bookLeft.rating
);
console.log(sortedByDescentingRating.map(book => book.rating));

// ==============

const students3 = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];

const uniqueSortedCourses = students3
  //to flat array
  .flatMap(student => student.courses)
  // unique
  .filter((course, index, array) => {
    // only unique enteries will have `true`.
    // if the first match found earlier than index) {the element is repeating and wont be added again)
    // first match and index must be the same
    console.log(
      array,
      '\n',
      course,
      '\t#',
      index,
      '\t1st match',
      array.indexOf(course),
      '\tis filtered',
      array.indexOf(course) === index
    );
    return array.indexOf(course) === index;
  })
  //sort
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// ======================

const books3 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Tell-Tale Heart',
    author: 'Edgar Allan Poe',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books3
  .filter(b => b.rating >= MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted();

console.log(names);
