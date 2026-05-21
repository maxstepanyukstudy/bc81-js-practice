// Створи змінну з твоїм іменем, віком і чи є у тебе домашній улюбленець (true/false). Виведи всі три в консоль.
const firstName = 'Maks Step';
const age = 23;
const pet = true;
console.log(firstName, age, pet);

// ================

// Створи змінну price зі значенням 150 і змінну discount зі значенням 20. Порахуй фінальну ціну і виведи результат.
const price = 150;
const discountPercent = 20;

const discountAmount = (price / 100) * discountPercent;
const totalPrice = price - discountAmount;

console.log(totalPrice);

// ================

// Створи змінну з твоїм повним іменем. Виведи кількість символів у ньому.
const fullName = 'Maksym Stepanuik';
console.log(fullName.length);

// ================

// Є рядок "  Привіт, світ!  ". Видали пробіли на початку і в кінці та виведи результат.
const input = '  Привіт, світ!  ';
// console.log(input);
const output = input.trim();
console.log(output);

// ================

// Створи змінну password = "myPass123".
// Перевір чи містить вона цифру "1" і чи починається з "my".
// Виведи обидва результати.

const password = 'myPass123';

const includes = password.includes('1');
const startsWith = password.startsWith('my');

console.log(includes);
console.log(startsWith);

// console.log(password.endsWith('5'));

// ================ extra ================

// ================

console.log(Boolean(' '));
console.log(Boolean(''));

console.log('lorem'.slice(0, 3).toUpperCase());
