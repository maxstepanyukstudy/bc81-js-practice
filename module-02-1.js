// Напиши функцію season(month),
// яка приймає номер місяця (1-12) і
// повертає пору року українською.

function seasonSwith(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 'зима';
    case 3:
    case 4:
    case 5:
      return 'весна';
    case 6:
    case 7:
    case 8:
      return 'літо';
    case 9:
    case 10:
    case 11:
      return 'осінь';
    default:
      return 'не правильний номер місяця';
  }
}

console.log(1, seasonSwith(1));
console.log(12, seasonSwith(12));
console.log(5, seasonSwith(5));
console.log(0, seasonSwith(0));

function seasonIf(month) {
  if (3 <= month && month >= 5) {
    return 'весна';
  } else if (6 <= month && month >= 8) {
    return 'весна';
  } else if (9 <= month && month >= 11) {
    return 'весна';
  } else if (month === 12 || month === 1 || month === 2) {
    return 'зима';
  } else {
    return 'не правильний номер місяця';
  }
}

console.log(1, seasonIf(1));
console.log(12, seasonIf(12));
console.log(5, seasonIf(5));
console.log(0, seasonIf(0));

// ================

// Напиши функцію ticketPrice(age),
// яка повертає ціну квитка:
// діти до 6 — безкоштовно,
// від 6 до 18 — 50 грн,
// від 18 до 60 — 100 грн,
// від 60 — 70 грн.

function ticketPrice(age) {
  if (age < 6) {
    return 'безкоштовно';
  } else if (age < 18) {
    return '50 грн';
  } else if (age < 60) {
    return '100 грн';
  } else {
    return '70 грн';
  }
}

console.log(5, ticketPrice(5));
console.log(50, ticketPrice(50));
console.log(100, ticketPrice(100));

// ================

// Напиши функцію formatGreeting(name, timeOfDay),
// яка повертає привітання залежно від часу доби:
// "morning" → "Добрий ранок, [name]!",
// "afternoon" → "Добрий день, [name]!",
// "evening" → "Добрий вечір, [name]!",
// інакше → "Привіт, [name]!".

function formatGreeting(name, timeOfDay) {
  switch (timeOfDay) {
    case 'morning':
      return `Добрий ранок, ${name}!`;
    case 'afternoon':
      return `Добрий день, ${name}!`;
    case 'evening':
      return `Добрий вечір, ${name}!`;
    default:
      return `Привіт, ${name}!`;
  }
}
console.log(formatGreeting('Іван', 'morning'));
console.log(formatGreeting('Іван', 'abc'));
console.log(formatGreeting('Іван'));

// ================

// Напиши функцію calculator(a, b, operator),
// яка виконує операцію +, -, * або / над двома числами.
// Якщо оператор невідомий — повертає "Невідомий оператор".
// Якщо ділення на нуль — повертає "Ділення на нуль".

function calculator(a, b, operator) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Ви передали не числа';
  }
  if (operator === '/' && b === 0) {
    return 'Ділення на нуль';
  }

  if (operator === '+') {
    return a + b;
  } else if (operator === '-') {
    return a - b;
  } else if (operator === '*') {
    return a * b;
  } else if (operator === '/') {
    return a / b;
  } else {
    return 'Невідомий оператор';
  }
}

console.log(calculator(1, 2, '+'));
console.log(calculator(3, 4, '-'));
console.log(calculator(0, 0, '/'));
console.log(calculator(1, 2, '!'));
console.log(calculator('1', 2, '+'));

// ================

// Напиши функцію
// gameResult(playerHP, enemyHP, playerMana, hasKey, doorLocked),
// яка повертає результат гри:
// "Dead" якщо hp гравця 0 або менше,
// "Victory" якщо hp ворога 0 або менше І гравець живий,
// "Locked" якщо двері замкнені І немає ключа І обидва живі,
// "Low Mana" якщо мана менше 10 І обидва живі І двері не замкнені або є ключ,
// "Continue" в інших випадках.

function gameResult(playerHP, enemyHP, playerMana, hasKey, doorLocked) {
  if (playerHP <= 0) {
    return 'Dead';
  }
  if (enemyHP <= 0 && playerHP > 0) {
    return 'Victory';
  }
  if (doorLocked && !hasKey && playerHP > 0 && enemyHP > 0) {
    return 'Locked';
  }
  if (
    playerMana < 10 &&
    playerHP > 0 &&
    enemyHP > 0 &&
    (!doorLocked || hasKey)
  ) {
    return 'Low Mana';
  }
  return 'Continue';
}

console.log(gameResult(0, 10, 50, true, false));
console.log(gameResult(50, 0, 50, true, false));
console.log(gameResult(50, 30, 50, false, true));
console.log(gameResult(10, 10, 15, true, true));

// ================

// Напиши функцію trafficLight(color, isEmergency, isPedestrianCrossing, timeOfDay),
// яка повертає дію водія:
// якщо є екстрена служба — "Pull over",
// якщо зелений І немає пішоходів — "Go",
// якщо жовтий АБО є пішоходи — "Slow down",
// якщо червоний — "Stop",
// якщо нічний час (22:00-06:00) І червоний І немає пішоходів — "Stop and check",
// інакше — "Unknown".

function trafficLight(color, isEmergency, isPedestrianCrossing, timeOfDay) {
  if (isEmergency) {
    return 'Pull over';
  }
  if (color === 'green' && !isPedestrianCrossing) {
    return 'Go';
  }
  if (color === 'yellow' || isPedestrianCrossing) {
    return 'Slow down';
  }
  if (color === 'red') {
    return 'Stop';
  }
  if (timeOfDay === 'noght' && color === 'red' && !isPedestrianCrossing) {
    return 'Stop and check';
  }
  return 'Unknown';
}

console.log(trafficLight('red', true, false, 'night'));
console.log(trafficLight('green', false, true, 'day'));
