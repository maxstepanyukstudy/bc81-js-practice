// Напиши функцію intersection(arr1, arr2),
// яка повертає масив елементів які є в обох масивах.
// Наприклад: [1, 2, 3] і [2, 3, 4] → [2, 3].

// using index `for` loop
function intersection(arr1, arr2) {
  const commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
}
console.log(intersection([1, 2, 3], [2, 3, 4]));

// using `for of` loop
function intersection2(arr1, arr2) {
  const commonElements = [];

  for (const item of arr1) {
    if (arr2.includes(item)) {
      commonElements.push(item);
    }
  }

  return commonElements;
}
console.log(intersection2([1, 2, 3], [2, 3, 4]));

// not using `.includes()`
function intersection3(arr1, arr2) {
  const resultArray = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr2[k] === arr1[i]) {
        resultArray.push(arr2[k]);
      }
    }
  }

  return resultArray;
}
console.log(intersection3([1, 2, 3], [2, 3, 4]));

// ================

// Напиши функцію getOdd(arr),
// яка повертає новий масив
// тільки з непарними числами.

function getOdd(arr) {
  const oddElements = [];

  for (const item of arr) {
    if (item % 2 === 1) {
      oddElements.push(item);
    }
  }
  return oddElements;
}

console.log(getOdd([1, 2, 3, 4]));

// ================

// Напиши функцію multiplyAll(arr, n),
// яка повертає новий масив
// де кожен елемент помножений на n.

function multiplyAll(numbers, multiply) {
  const resultArray = [];

  for (const number of numbers) {
    resultArray.push(number * multiply);
  }

  return resultArray;
}

console.log(multiplyAll([1, 2, 3, 4], 10));
console.log(multiplyAll([1, 2, 3, 4], 5));
console.log(multiplyAll([1, 2, 3, 4], 7));

const multiplyAllOneLiner = [1, 2, 3, 3, 3, 3].map(a => a * 2);

console.log(multiplyAllOneLiner)

// ================

// Напиши функцію moveTo(arr, value, position),
// яка переміщує всі входження value
// або на початок ("start")
// або в кінець ("end") масиву
// не змінюючи порядок решти елементів.

function moveTo(arr, value, position) {
  const targets = [];
  const otherElements = [];

  for (const item of arr) {
    if (item === value) {
      targets.push(item);
    } else {
      otherElements.push(item);
    }
  }

  if (position === 'start') {
    // return targets.concat(otherElements);
    return [...targets, ...otherElements];
  }
  if (position === 'end') {
    return otherElements.concat(targets);
  }
}
console.log(moveTo(['a', 'b', 'a', 'c'], 'a', 'end'));
console.log(moveTo(['a', 'b', 'a', 'c'], 'c', 'start'));

// alt solution

function moveTo2(arr, value, position) {
  let result = [];

  if (position === 'start') {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        result.push(arr[i]);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== value) {
        result.push(arr[i]);
      }
    }
  }

  if (position === 'end') {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== value) {
        result.push(arr[i]);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}

console.log(moveTo2(['a', 'b', 'a', 'c'], 'a', 'end'));
console.log(moveTo2(['a', 'b', 'a', 'c'], 'c', 'start'));

// ================

// Напиши функцію boardGame(board, moves),
// яка симулює просту гру.
// board — масив рядків де
// "X" — стіна,
// " " — порожньо,
// "E" — вихід.
// moves — масив напрямків "left", "right".
// Гравець починає з індексу 0.
// Повертає
// "Exit" якщо гравець дійшов до виходу,
// "Wall" якщо врізався в стіну,
// "Out" якщо вийшов за межі масиву,
// "Stuck" якщо пройшов всі ходи і не досяг виходу.

const board = [' ', ' ', 'E', 'X'];
const moves = ['right', 'right', 'left'];

function boardGame(board, moves) {
  let moveIndex = 0;

  // finish moving
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'right') {
      moveIndex += 1;
    }
    if (moves[i] === 'left') {
      moveIndex -= 1;
    }
  }

  // check result
  if (moveIndex > board.length - 1 || moveIndex < 0) {
    return 'Out';
  }
  if (board[moveIndex] === 'X') {
    return 'Wall';
  }
  if (board[moveIndex] === 'E') {
    return 'Exit';
  }
  return 'Stuck';
}
console.log(boardGame(board, moves));

// ================

// Напиши функцію sumByIndex(arr1, arr2),
// яка повертає новий масив де
// кожен елемент — сума елементів з однаковим індексом.
// Якщо масиви різної довжини —
// для відсутніх елементів використовуй 0.
// Наприклад: [1,2,3] і [4,5] → [5,7,3].

function sumByIndex(arr1, arr2) {
  const result = [];
  const length = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < length; i++) {
    const a = arr1[i] !== undefined ? arr1[i] : 0;
    const b = arr2[i] !== undefined ? arr2[i] : 0;

    result.push(a + b);
  }

  return result;
}
console.log(sumByIndex([1, 2, 3], [4, 5, 0, 0]));

function sumByIndex2(arr1, arr2) {
  const result = [];
  const length = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < length; i++) {
    const a = arr1[i] || 0;
    const b = arr2[i] || 0;

    result.push(a + b);
  }

  return result;
}
console.log(sumByIndex2([1, 2, 3], [4, 5, 0, 0]));

// ================

// Напиши функцію replaceNegative(arr),
// яка замінює всі від'ємні числа на 0
// і повертає новий масив.

function replaceNegative(arr) {
  const result = [];
  for (const item of arr) {
    const notNegative = item < 0 ? 0 : item;
    result.push(notNegative);
  }
  return result;
}

console.log(replaceNegative([-1, 1, 0, 10, -10]));

// ================

// Напиши функцію everyOther(arr),
// яка повертає кожен другий елемент масиву
// починаючи з першого. Наприклад: [1,2,3,4,5] → [1,3,5].

function everyOtherV1(arr) {
  const result = [];
  const step = 2;
  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }
  return result;
}
console.log(everyOtherV1([1, 2, 3, 4, 5]));

function everyOtherV2(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(everyOtherV2([1, 2, 3, 4, 5]));

// Напиши функцію splitByCondition(arr),
// яка розбиває масив чисел на два масиви:
// перший з парними, другий з непарними.
// Повертає масив з двох масивів.

function splitByCondition(arr) {
  const even = [];
  const odd = [];

  for (const item of arr) {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  }
  return [even, odd];
}

console.log(splitByCondition([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
