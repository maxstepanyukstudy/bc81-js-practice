function foo() {
  console.log(this);
}

foo(); // window

// ==========

const book2 = {
  updateTitle(newTitle) {
    this.title = newTitle;
    return this;
  },
};

const update = book2.updateTitle;

console.log('    `window` - if not strict');
console.log(update('Lord Of The Rings'));

// ========

const library = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

const showBooks = library.logBookCount.bind({ books: 724 });

showBooks();

// ==================================================

const showThis2 = () => {
  console.log('this in showThis: ', this);
};
showThis2(); // undefined
