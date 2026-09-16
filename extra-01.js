// ====================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// callback -> closure -> example

function memoize(fn) {
  const cache = {}; // приховане сховище

  return function (arg) {
    if (arg in cache) {
      console.log('з кешу');
      return cache[arg];
    }

    console.log('обчислюємо');
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

async function slowSquare(n) {
  await sleep(1000); // for demo
  return n * n;
}

const fastSquare = memoize(slowSquare);

console.log(await fastSquare(5)); // "обчислюємо" → 25
console.log(await fastSquare(5)); // "з кешу" → 25, миттєво

console.log(await fastSquare(1)); // "з кешу" → 25, миттєво
console.log(await fastSquare(5)); // "з кешу" → 25, миттєво
console.log(await fastSquare(1)); // "з кешу" → 25, миттєво
console.log(await fastSquare(1)); // "з кешу" → 25, миттєво
console.log(await fastSquare(1)); // "з кешу" → 25, миттєво
console.log(await fastSquare(1)); // "з кешу" → 25, миттєво





// ==========================================

// Спосіб створити "модуль" з приватною й публічною частиною ще до появи ES-модулів (import/export, картка 35):


const Calculator = (function () {
  let history = []; // приватна змінна, недоступна ззовні

  function log(operation, result) {
    history.push(`${operation} = ${result}`);
  }

  return {
    add(a, b) {
      const result = a + b;
      log(`${a}+${b}`, result);
      return result;
    },
    getHistory() {
      return [...history]; // копія, не сама приватна змінна
    },
  };
})();

Calculator.add(2, 3);
console.log(Calculator.getHistory()); // ["2+3=5"]
console.log(Calculator.history); // undefined

// IIFE (Immediately Invoked Function Expression) виконується одразу й повертає обʼєкт з публічним API, а history лишається схованою в замиканні назавжди.

// ========================

const obj = Object.create(null);
console.log("🚀 ~ obj:", obj)
// vs
console.log({});

