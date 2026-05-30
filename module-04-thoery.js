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
