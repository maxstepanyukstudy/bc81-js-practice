const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  public: true,
  rating: 8.38,
};
console.log('book\n', book);

const bookJsonString = JSON.stringify(book);
console.log('bookJsonString\n', bookJsonString);

const bookJsObjectFromJsonString = JSON.parse(bookJsonString);
console.log('bookJsObjectFromJsonString\n', bookJsObjectFromJsonString);

// // but:
// console.log(JSON.parse(book)); //error
// // because js Obj in not json string

// ================

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
// console.log(apartment);

// access with dots
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];
console.log(ownerName, ownerPhone, ownerEmail, numberOfTags, firstTag, lastTag);

// access with []
const ownerName2 = apartment['owner']['name'];
const ownerPhone2 = apartment['owner']['phone'];
const ownerEmail2 = apartment['owner']['email'];
const numberOfTags2 = apartment['tags']['length'];
const firstTag2 = apartment['tags'][0];
const lastTag2 = apartment['tags'][numberOfTags2 - 1];
console.log(
  ownerName2,
  ownerPhone2,
  ownerEmail2,
  numberOfTags2,
  firstTag2,
  lastTag2
);

// doent change the original object
let aptRating = apartment.rating;
let aptDescr = apartment.descr;
let aptPrice = apartment.price;
let aptTags = apartment.tags;
aptRating = 5;
aptDescr = 'new text';
aptPrice = 0;
aptTags = ['test', 'if', 'changed'];
console.log(apartment);

// changes the original object
const apartmentCopy = apartment;
apartmentCopy.rating = 5;
apartmentCopy.descr = 'new text';
apartmentCopy.price = 0;
apartmentCopy.tags = ['test', 'if', 'changed'];
console.log(apartment); // apartment not apartmentCopy. but points to the same thing in RAM?

// ================

const book2 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
// access with [] usecase
const propKey = 'author';
console.log(book2.propKey); // undefined
console.log(book2[propKey]); // "Bernard Cornwell"

// ================

const apartment3 = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment3.area = 60;
apartment3.rooms = 3;

apartment3.location = {}; //needs to be here
apartment3.location.country = 'Jamaica';
apartment3.location.city = 'Kingston';

apartment3.location2 = {
  country: 'Jamaica',
  city: 'Kingston',
};

console.log(apartment3);

// ================

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

//shorthand
const product = { name, price, image, tags };
console.log(product);
//when diff names
const product2 = { title: name, usd: price, photo: image };
console.log(product2);

// ================

const propName = 'name';
const nameValue = 'Henry Sibola';

const user = {
  age: 25,
  [propName]: nameValue,
  [propName + 'postfix']: nameValue,
};

console.log(user);
console.log(user.name);
console.log(user.namepostfix);

// ================

const apartment4 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment4) {
  keys.push(key);
  values.push(apartment4[key]);
}

console.log(keys, values);

// ================

function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  const values = [];
  for (const item of products) {
    if (typeof item[propName] === 'undefined') continue;
    values.push(item[propName]);
  }

  return values;
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('qwe'));

// ================

function calculateTotalPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  let foundProduct;

  for (const item of products) {
    if (item.name === productName) {
      foundProduct = item;
    }
  }

  if (typeof foundProduct === 'undefined') {
    return `Product ${productName} not found!`;
  }
  return foundProduct.price * foundProduct.quantity;
}

console.log(calculateTotalPrice('Grip'));
console.log(calculateTotalPrice('qwe'));

// ================

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const item of this.potions) {
      totalPrice += item.price;
    }
    return totalPrice;
  },
  updatePotionName(oldName, newName) {
    for (const item of this.potions) {
      if (item.name === oldName) {
        item.name = newName;
        // break;
      }
    }
  },
};

console.log(atTheOldToad.getTotalPrice());

// ================

function add(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum;
}

console.log(add(1, 2, 3));

// ================

function addOverNum(value, ...args) {
  let sum = 0;
  for (const item of args) {
    if (value < item) sum += item;
  }
  return sum;
}
console.log(addOverNum(2, 1, 3, 4));

// ================

const temps = [14, -4, 25, 8, 11];

console.log(temps); // [14, -4, 25, 8, 11]
// Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

console.log(...temps); // 14 -4 25 8 11  набір окремих чисел
// Передамо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

// ================

function getExtremeScores(scores) {
  const best = Math.max(...scores);
  const worst = Math.min(...scores);
  // const obj = {
  //   best: best,
  //   worst: worst,
  // };
  const obj = {
    best,
    worst,
  };
  return obj;
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// ================

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(worstScore, bestScore);
