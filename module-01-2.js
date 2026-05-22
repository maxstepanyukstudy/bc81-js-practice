console.log('module-01-2.js');

// ================

// Напиши функцію isLongPassword(password),
// яка повертає true якщо пароль довший за 8 символів.

function isLongPassword(password) {
  const requiredLength = 8;

  const passwordLength = password.length;
  const result = passwordLength > requiredLength;

  return result;
}

const password1 = 'password123';
const acceptPass1 = isLongPassword(password1);
console.log(acceptPass1);

const password2 = 'pass';
const acceptPass2 = isLongPassword(password2);
console.log(acceptPass2);

console.log(
  isLongPassword(
    'very secure password ' +
      'with some digits ' +
      '2347129038471902387409128374'
  )
);

// ================

// Напиши функцію getInitials(firstName, lastName),
// яка повертає ініціали.
// Наприклад: "Іван Франко" -> "І.Ф.".

function getInitials(firstName, lastName) {
  const firstNameInitial = firstName[0];
  const lastNameInitial = lastName[0];
  const initials = `${firstNameInitial}.${lastNameInitial}.`;
  return initials;
}

const initials = getInitials('Іван', 'Франко');
console.log(initials);

console.log(getInitials('maks', 'step'));

// ================

// Напиши функцію truncate(str, maxLength),
// яка обрізає рядок до maxLength символів
// і додає "..." в кінці якщо рядок був довшим.

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    const sliced = str.slice(0, maxLength);
    return `${sliced}...`;
  }

  return str;
}
console.log(truncate('1234567890', 5));
console.log(truncate('1234567890', 9));
console.log(truncate('1234567890', 10));

// ================

// Напиши функцію trimAndLower(str),
// яка прибирає пробіли на початку і
// в кінці рядка та переводить його в нижній регістр.

function trimAndLower(str) {
  // return str.trim().toLocaleLowerCase();

  const trimStr = str.trim();
  const lowerStr = trimStr.toLocaleLowerCase();
  return lowerStr;
}

console.log(trimAndLower('          AAAFFFF     SDofld  fkgj      '));

// ================

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const exampleMinutes = 61;

const userMinutes = Number(prompt('введіть кількість хвилин', exampleMinutes));

function formatTime(totalMinutes) {
  // return `${String(Math.floor(totalMinutes / 60)).padStart(2, 0)}:${String(totalMinutes % 60).padStart(2, 0)}`; //lol

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  return `${hh}:${mm}`;
}

console.log(formatTime(userMinutes));
