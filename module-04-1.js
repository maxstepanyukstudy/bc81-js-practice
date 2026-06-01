// ================

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
  name: 'John',
  age: 20,
  hobby: 'tenis',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}

// ================

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

function calculateAvarageSalary(employeeSalaryies) {
  let sum = 0;
  const salaryValues = Object.values(employeeSalaryies);
  const length = salaryValues.length;

  if (length === 0) return 0;

  for (const item of salaryValues) {
    sum += item;
  }
  return sum / length;
}

console.log(calculateAvarageSalary(salaries));
console.log(calculateAvarageSalary({}));

// ================

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  exist() {
    const areIn = 'a' in this && 'b' in this;
    const areNumber = typeof this.a === 'number' && typeof this.b === 'number';
    return areIn && areNumber;
  },
  sum() {
    if (!this.exist()) return 'No such propeties';
    return this.a + this.b;
  },
  mult() {
    if (!this.exist()) return 'No such propeties';
    return this.a * this.b;
  },
};

//test - negative
calculator.read();
console.log(calculator);
console.log(calculator.exist());
console.log(calculator.mult());
console.log(calculator.sum());

//test - positive
console.log(calculator.read(1, 2));
console.log(calculator);
console.log(calculator.exist());
console.log(calculator.mult());
console.log(calculator.sum());

//test `in`
console.log('c' in calculator);

// ================

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let sum = 0;
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      sum += fruit.price * fruit.quantity;
    }
  }
  return sum;
}
console.log(calcTotalPrice(fruits, 'Банан'));

function calcTotalPrice2(fruits, fruitName) {
  let sum = 0;
  for (const { name, price, quantity } of fruits) {
    if (name === fruitName) {
      sum += price * quantity;
    }
  }
  return sum;
}
console.log(calcTotalPrice2(fruits, 'Банан'));

// ===

const [first, second] = [1, 'two'];
console.log(first, second);

const { name, price } = { name: 'Яблуко', price: 45, quantity: 7 };
console.log(name, price);

// ================
