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
