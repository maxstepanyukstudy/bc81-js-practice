// Напиши функцію groupBy(arr, key),
// яка групує масив обʼєктів за значенням вказаного ключа
// і повертає обʼєкт.
// Наприклад: groupBy(users, "city") → { Kyiv: [...], Lviv: [...] }.

const users = [
  {
    id: 1,
    firstName: 'Іван',
    lastName: 'Петренко',
    age: 25,
    city: 'Kyiv',
    salary: 45000,
  },
  {
    id: 2,
    firstName: 'Марія',
    lastName: 'Коваленко',
    age: 17,
    city: 'Lviv',
    salary: 32000,
  },
  {
    id: 3,
    firstName: 'Олег',
    lastName: 'Сидоренко',
    age: 32,
    city: 'Kyiv',
    salary: 67000,
  },
  {
    id: 4,
    firstName: 'Анна',
    lastName: 'Бондаренко',
    age: 15,
    city: 'Odesa',
    salary: 28000,
  },
  {
    id: 5,
    firstName: 'Дмитро',
    lastName: 'Мельник',
    age: 28,
    city: 'Lviv',
    salary: 51000,
  },
  {
    id: 6,
    firstName: 'Юлія',
    lastName: 'Шевченко',
    age: 22,
    city: 'Kyiv',
    salary: 39000,
  },
  {
    id: 7,
    firstName: 'Максим',
    lastName: 'Кравченко',
    age: 16,
    city: 'Odesa',
    salary: 25000,
  },
  {
    id: 8,
    firstName: 'Ольга',
    lastName: 'Лисенко',
    age: 35,
    city: 'Lviv',
    salary: 72000,
  },
];

function groupBy1For(usersArray, key) {
  const uniqueGroupKeysValue = [];
  for (const user of usersArray) {
    const currentKeyValue = user[key];
    if (!uniqueGroupKeysValue.includes(currentKeyValue)) {
      uniqueGroupKeysValue.push(currentKeyValue);
    }
  }

  const result = {};
  for (const value of uniqueGroupKeysValue) {
    result[value] = [];
    for (const user of usersArray) {
      if (value === user[key]) result[value].push(user);
    }
  }

  return result;
}
console.log(groupBy1For(users, 'city'));

function groupBy1ForEach(usersArray, key) {
  const uniqueGroupKeysValue = [];

  usersArray.forEach(user => {
    const currentKeyValue = user[key];
    if (!uniqueGroupKeysValue.includes(currentKeyValue)) {
      uniqueGroupKeysValue.push(currentKeyValue);
    }
  });

  const result = {};
  uniqueGroupKeysValue.forEach(value => {
    result[value] = [];
    for (const user of usersArray) {
      if (value === user[key]) result[value].push(user);
    }
  });

  return result;
}
console.log(groupBy1ForEach(users, 'city'));

const groupBy2 = (usersArray, key) => {
  const result = {};

  usersArray.forEach(user => {
    const groupKey = user[key];

    if (result[groupKey] === undefined) {
      result[groupKey] = [];
    }

    result[groupKey].push(user);
  });

  return result;
};
console.log(groupBy2(users, 'city'));

// ================

// Напиши функцію
// mapAndFilter(arr, mapFn, filterFn),

// яка спочатку застосовує mapFn
// до кожного елемента

// а потім
// фільтрує результат через
// filterFn.

const mapAndFilter = (books, mapFn, filterFn) => {
  const mapped = books.map(mapFn);
  const filtered = mapped.filter(filterFn);
  return filtered;
};

const mapFn_addTotalPriceKeyValue = (itemBook, bookIndex, BooksArray) => {
  const totalPrice = itemBook.price * itemBook.pages;
  return { ...itemBook, totalPrice };
};

const filterFn_isLongEnough = (bookItem, bookIndex, BooksArray) => {
  const isFiltered = bookItem.pages >= 250;
  return isFiltered;
};

const books = [
  {
    id: 1,
    title: 'Кобзар',
    author: 'Шевченко',
    genre: 'Poetry',
    price: 250,
    pages: 320,
  },
  {
    id: 2,
    title: 'Тіні забутих предків',
    author: 'Коцюбинський',
    genre: 'Novel',
    price: 180,
    pages: 156,
  },
  {
    id: 3,
    title: '1984',
    author: 'Orwell',
    genre: 'Dystopia',
    price: 320,
    pages: 328,
  },
  {
    id: 4,
    title: 'Чистий код',
    author: 'Martin',
    genre: 'Tech',
    price: 850,
    pages: 431,
  },
  {
    id: 5,
    title: 'Lesia Ukrainka',
    author: 'Ukrainka',
    genre: 'Poetry',
    price: 210,
    pages: 280,
  },
  {
    id: 6,
    title: 'JavaScript',
    author: 'Flanagan',
    genre: 'Tech',
    price: 1200,
    pages: 706,
  },
  {
    id: 7,
    title: 'Brave New World',
    author: 'Huxley',
    genre: 'Dystopia',
    price: 290,
    pages: 311,
  },
  {
    id: 8,
    title: 'Місто',
    author: 'Підмогильний',
    genre: 'Novel',
    price: 195,
    pages: 248,
  },
];

console.log(
  mapAndFilter(books, mapFn_addTotalPriceKeyValue, filterFn_isLongEnough)
);
