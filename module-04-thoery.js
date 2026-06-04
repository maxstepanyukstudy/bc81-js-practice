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

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment){
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys, values)