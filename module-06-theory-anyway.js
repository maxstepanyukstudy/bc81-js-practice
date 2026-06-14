// ======================

const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order('Smoked'));
console.log(pizzaPalace.order('Four meats'));
console.log(pizzaPalace.order('Big Mike'));
console.log(pizzaPalace.order('Viennese'));

// ======================

const user1 = {
  username: 'Poly',
  showThis() {
    console.log(this);
  },
};

user1.showThis(); // {username: "Poly", showThis: ƒ}

// ==============

const book = {
  updateAuthor(newAuthor) {
    this.author = newAuthor;
    return this;
  },
};

console.log(book.updateAuthor('Jacob'));

// =================

function greet1(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: 'Mango',
  room: 27,
};

const poly = {
  username: 'Poly',
  room: 191,
};

greet1.call(mango, 'Welcome'); // "Welcome, Mango, your room is 27!"
greet1.call(poly, 'Aloha'); // "Aloha, Poly, your room is 191!"

// ================

function greet2(name) {
  console.log(`Hello, ${name}! I am ${this.person}`);
}

const person = 'John';
const context = {
  person: 'Alice',
};

greet2.call(context, 'Bob');

// ==============

const customer1 = {
  username: 'Jacob',
  sayHello() {
    console.log(`Hello, ${this.username}!`);
  },
};

customer1.sayHello(); // "Hello, Jacob!"

const greetBind = customer1.sayHello.bind(customer1);

greetBind(); // "Hello, Jacob!"

// ==================

const showThisArrow = () => {
  console.log('this in showThis: ', this);
};

const user = {
  username: 'Mango',
};

// does not change
user.showContext = showThisArrow;
user.showContext();

// ===============

const hotel = {
  username: 'Resort hotel',
  showThis() {
    const foo = () => {
      console.log('this in foo: ', this);
    };

    foo();
    console.log('this in showThis: ', this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// ================

const showThis = () => {
  console.log('this in showThis: ', this);
};
// no change
showThis.call({ username: 'Mango' });
showThis.apply({ username: 'Mango' });

const boundShowThis = showThis.bind({ username: 'Mango' });
boundShowThis();

// =======

const a = () => {
  console.log(this);
};

function b() {
  a();
}

b.call({ user: 'Mango' });
