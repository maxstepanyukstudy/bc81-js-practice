const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
  //   coverImage: undefined,
};
console.log(book);

// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
const {
  // unpack
  title,
  // default
  isPublic = false,
  // rename
  author: bookAuthor,
  rating: bookRating,
  // rename and default
  coverImage: cover = 'https://via.placeholder.com/640/480',
} = book;

console.log(title); // "The Last Kingdom"
console.log(bookAuthor); // "Bernard Cornwell"
console.log(cover); // "https://via.placeholder.com/640/480"
console.log(isPublic); // true
console.log(bookRating);

// ==========================================

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title, book.author, book.rating);
}

for (const book of books) {
  const { title, author, rating } = book;
  console.log(title, author, rating);
}

for (const { title, author, rating } of books) {
  console.log(title, author, rating);
}

// ==========================================

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  // deep destruct
  stats: {
    //default
    followers = 0,
    //rename
    views: userViews,
    //rename and default
    likes: userLikes = 0,
  },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

// ==========================================

const color = [200, 100, 255];
const [red, green, blue, alfa = 0.3] = color;

console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`); // “rgba(200, 255, 100, 0.3)"

// ==========================================

const user2 = {
  name: 'Jacob',
  age: 32,
  email: 'j.cob@mail.com',
  isOnline: true,
};

const { name2, isOnline, ...otherProps } = user2;

console.log(name); // "Jacob"
console.log(isOnline); // true
console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}
