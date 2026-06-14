'use strict';

// ======================

function foo() {
  console.log(this);
}
foo(); // undefined

// =============

function showThis() {
  console.log('this in showThis: ', this);
}

const user = {
  username: 'Poly',
};

user.showContext = showThis;

// Викликаємо в контексті об'єкта
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"

// ===============

const book2 = {
  updateTitle(newTitle) {
    this.title = newTitle;
    return this;
  },
};

const update = book2.updateTitle;

// exeption - when using `<script type="module"` or `"use strict"
// // console.log(update('Lord Of The Rings'));

// ==============

const customer2 = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  const username = callback();
  console.log(`Processing an application from ${username}`);
}
// // callback() - тут виклик методу getFullName в глобальному контексті
// // TypeError: Cannot read properties of undefined (reading 'firstName')
// console.log(makeMessage(customer2.getFullName));

// "Processing an application from Jacob Mercer"
console.log(makeMessage(customer2.getFullName.bind(customer2)));

// ==========

const library = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

function showBooks(callback) {
  callback();
}

// showBooks(library.logBookCount); // type error
showBooks(library.logBookCount.bind(library));

// ==================================================

const showThis2 = () => {
  console.log('this in showThis: ', this);
};
showThis2(); // this in showThis: window

// ==================

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
console.log(parent);

console.log(
  "parent.hasOwnProperty('surname')",
  parent.hasOwnProperty('surname')
);
console.log(
  "parent.hasOwnProperty('heritage')",
  parent.hasOwnProperty('heritage')
);

// console.log('parent.isPrototypeOf(child)', parent.isPrototypeOf(child)); // error

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.log(child);

console.log('parent.isPrototypeOf(child)', parent.isPrototypeOf(child));

console.log("child.hasOwnProperty('age')", child.hasOwnProperty('age'));
console.log("child.hasOwnProperty('name')", child.hasOwnProperty('name'));
console.log(
  "child.hasOwnProperty('heritage')",
  child.hasOwnProperty('heritage')
);
console.log("child.hasOwnProperty('surname')", child.hasOwnProperty('surname'));
console.log('child.surname', child.surname);
console.log('child.heritage', child.heritage);
console.log('child.name', child.name);
console.log('child.age', child.age);

// ==========

const customer = {
  username: 'Jacob',
};

const animal1 = {
  legs: 4,
};

const dog1 = Object.create(animal1);
dog1.name = 'Mango';

console.log(dog1); // { name: "Mango", [[Prototype]]: animal }

console.log(animal1.isPrototypeOf(dog1)); // true
console.log(dog1.isPrototypeOf(animal1)); // false
console.log(customer.isPrototypeOf(dog1)); // false

// ============

const animal2 = { legs: 4 };
const dog2 = Object.create(animal2);
dog2.name = 'Mango';

// all
for (const key in dog2) {
  console.log(key); // "name" "legs"
}

// manual check
for (const key in dog2) {
  if (dog2.hasOwnProperty(key)) {
    console.log(key); // "name"
  }
}

// separate
console.log(Object.keys(dog2)); // ["name"]
for (const key of Object.keys(dog2)) {
  console.log(key); // "name"
}
console.log(Object.values(dog2)); // ["Mango"]

// =============

const apartment = {
  rooms: 4,
  floor: 2,
  taxFree: false,
};
console.log(apartment.rooms);

const condo = Object.create(apartment);
condo.rooms = 3;

console.log(condo);
console.log(condo.rooms);
console.log(condo.__proto__.rooms); // just for example
