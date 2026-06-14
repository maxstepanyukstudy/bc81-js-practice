const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
console.log(planets);
planets[0] = 'Jupiter';
planets[2] = 'Neptune';
console.log(planets);

// ================

function getLastElementMeta(array) {
  const index = array.length - 1;
  const element = array[index];

  const result = [index, element];

  return result;
}

console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
console.log(getLastElementMeta(['apple', 'peach', 'pear']));
console.log(getLastElementMeta(['apple', 'peach']));
console.log(getLastElementMeta(['apple']));

// alt version

function getLastElementMeta2(array) {
  const index = array.length - 1;
  const element = array[index];

  const result = [];
  result[0] = index;
  result[1] = element;

  return result;
}

console.log(getLastElementMeta2(['apple', 'peach', 'pear', 'banana']));
console.log(getLastElementMeta2(['apple', 'peach', 'pear']));
console.log(getLastElementMeta2(['apple', 'peach']));
console.log(getLastElementMeta2(['apple']));

// ================

function getExtremeElements(array) {
  const first = array[0];
  const last = array[array.length - 1];
  const result = [first, last];
  return result;
}

console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
console.log(getExtremeElements(['apple', 'peach', 'pear']));
console.log(getExtremeElements(['apple', 'peach']));
console.log(getExtremeElements(['apple']));

// ================

const words = ['JavaScript', 'is', 'amazing'];
console.log(words.join('')); // 'JavaScriptisamazing'
console.log(words.join(' ')); // 'JavaScript is amazing'
console.log(words.join('-')); // 'JavaScript-is-amazing'
console.log(words.join('_+_')); // 'JavaScript-is-amazing'

function getLength(array) {
  return array.join('').length;
}
console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));

// ================

const nameUser = 'Mango';
const copy = nameUser.split();
console.log(copy); // ["Mango"]
const letters = nameUser.split('');
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = 'JavaScript essentials';
const words2 = message.split(' ');
console.log(words2); // ["JavaScript", "essentials"]

const slug = 'amazing-french-recipes';
const slugParts = slug.split('-');
console.log(slugParts); // ["amazing", "french", "recipes"]

function calculateEngravingPrice(message, pricePerWord) {
  const wordsAmount = message.split(' ').length;
  return wordsAmount * pricePerWord;
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// ================

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// ================

const firstArray = ['Mercury', 'Venus'];
const secondArray = ['Mars', 'Jupiter'];
const thirdArray = ['Saturn', 'Neptune'];
const notArray = 'Earth'; //also works

console.log(firstArray.concat(secondArray, thirdArray, notArray));

// ================

function calculateTotalPrice(order) {
  let sum = 0;

  for (let i = 0; i < order.length; i++) {
    sum += order[i];
  }

  return sum;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ================

function sum1(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(sum1(2, 5));

function sum2(a, b) {
  // a, b - aunused
  console.log(arguments);

  let total = 0;
  for (const arg of arguments) {
    total += arg;
  }
  return total;
}
console.log(sum2(2, 5, 7, 8));

// ================

function createReversedArray() {
  return Array.from(arguments).toReversed();
}

console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray());

// ================

function count(from = 0, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step}`);

  let string = '';
  for (let i = from; i <= to; i += step) {
    string += i + ';';
  }
  console.log(string);
}

count(1, 15, 4); // "from: 1, to: 15, step: 4"
count(1, 15); // "from: 1, to: 15, step: 1"
count(); // from: 0, to: undefined, step: 1
