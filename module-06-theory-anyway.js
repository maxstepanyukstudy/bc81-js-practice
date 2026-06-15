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

// ===================================

class Car1 {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}

// =============

class Car2 {
  #brand;

  constructor(params) {
    this.#brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

// ===============

class User1 {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log('Invalid email format');
    }
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes('@');
  }
}

const mango2 = new User1({
  name: 'Mango',
  email: 'mango@mail.com',
});

// Спробуємо змінити електронну пошту
mango2.changeEmail('newmail.com'); // "Invalid email format"
mango2.changeEmail('new@mail.com');
console.log(mango2.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango2.#validateEmail('test'); // Помилка

// ===============

class User2 {
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango3 = new User2({
	name: "Mango",
	email: "mango@mail.com"
});

console.log(mango3.email); // mango@mail.com
mango3.email = "mango@supermail.com";
console.log(mango3.email); // mango@supermail.com

// ===============

class Car3 {
  #brand;
  #model;
  #price;

  constructor(params) {
    this.#brand = params.brand;
    this.#model = params.model;
    this.#price = params.price;
  }

  get brand() {
    return this.#brand;
  }
  set brand(brand) {
    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }
  set model(model) {
    this.#model = model;
  }

  get price() {
    return this.#price;
  }
  set price(price) {
    this.#price = price;
  }
}

// ==========================

class Car4 {
  static maxPrice = 50000;

  #price;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car4.maxPrice) {
      this.#price = newPrice;
    }
  }
}

const audi = new Car4({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// =======================

class User3 {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User3.#takenEmails.includes(email);
  }

  #email;

  constructor(params) {
    this.#email = params.email;
    User3.#takenEmails.push(params.email);
  }
}

const mango4 = new User3({ email: "mango@mail.com" });

console.log(User3.isEmailTaken("poly@mail.com")); // false
console.log(User3.isEmailTaken("mango@mail.com")); // true

// ======================

class Car5 {
  static #maxPrice = 50000;

  static checkPrice(price) {
    if (price > Car5.#maxPrice) {
      return 'Error! Price exceeds the maximum';
    }
    return 'Success! Price is within acceptable limits';
  }

  constructor(params) {
    this.price = params.price;
  }
}

const audi5 = new Car5({ price: 36000 });
const bmw5 = new Car5({ price: 64000 });

console.log(Car5.checkPrice(audi5.price)); // "Success! Price is within acceptable limits"
console.log(Car5.checkPrice(bmw5.price)); // "Error! Price exceeds the maximum"

// =========================

class User4 {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin4 extends User4 {
static  role = { BASIC: 'basic', SUPERUSER: 'superuser' };
}

// ==========================

class User5 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin5 extends User5 {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
}

const mango5 = new Admin5({
  email: 'mango@mail.com',
  access: Admin5.role.SUPERUSER,
});

console.log(mango5.email); // "mango@mail.com"
console.log(mango5.access); // "superuser"

// ==================

class User6 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin6 extends User6 {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango6 = new Admin6({
  email: 'mango@mail.com',
  access: Admin6.role.SUPERUSER,
});

console.log(mango6.email); // "mango@mail.com"
console.log(mango6.access); // "superuser"

mango6.blacklist('poly@mail.com');
console.log(mango6.blacklistedEmails); // ["poly@mail.com"]
console.log(mango6.isBlacklisted('mango@mail.com')); // false
console.log(mango6.isBlacklisted('poly@mail.com')); // true

// =================

