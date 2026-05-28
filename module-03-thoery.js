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

