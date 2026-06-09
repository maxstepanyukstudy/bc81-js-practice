// ===========================

// Створи клас User
// з полями name, email, role (default: 'user').
// Додай метод greet() що повертає 'Привіт, я Анна'.

class User {
  // regular param
  constructor(name, email, role = 'user') {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  greet() {
    return 'Привіт, я ' + this.name;
  }
  info() {
    return { name: this.name, email: this.email, role: this.role };
  }
}

const anna = new User('Anna', 'anna@hi.com');
console.log(anna.greet());
console.log(anna.info());

const bob = new User('Bob', 'bob@hi.com', 'admin');
console.log(bob.greet());
console.log(bob.info());

class UserObjConstructor {
  // obj as param
  constructor({ name, email, role = 'user' }) {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  greet() {
    return 'Привіт, я ' + this.name;
  }
  info() {
    return { name: this.name, email: this.email, role: this.role };
  }
}

const jackConfig = {
  name: 'Jack',
  email: 'jack@hi.com',
};
const jack = new UserObjConstructor(jackConfig);
console.log(jack.greet());
console.log(jack.info());

const alice = new UserObjConstructor({
  name: 'Alice',
  email: 'alice@hi.com',
  role: 'admin',
});
console.log(alice.greet());
console.log(alice.info());

// ================================

// Клас Animal(name, sound) з методом speak().
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    return this.name + ' makes ' + this.sound;
  }
}
const frog = new Animal('frog', 'ribbit');
console.log(frog);
console.log(frog.speak());

// Dog extends Animal,
// додає breed і fetch().
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'bark');
    this.breed = breed;
  }
  fetch(item) {
    return this.name + ' fetched ' + item;
  }
}
const dog = new Dog('dog', 'terier');
console.log(dog);
console.log(dog.speak());
console.log(dog.fetch('ball'));

// GoldenRetriever extends Dog,
// перевизначає speak() викликаючи super.speak().
class GoldenRetriever extends Dog {
  constructor(name) {
    super(name, 'Golden Retriever');
  }

  //overrides parent(super) method
  speak() {
    // but also uses method from parent(the super class)
    const ogSpeakResult = super.speak();
    return ogSpeakResult + ' and waggs tail';
  }
}
const goldy = new GoldenRetriever('goldy');
console.log(goldy);
console.log(goldy.speak());
console.log(goldy.fetch('gold-ball'));

// ================================

// Vehicle(brand, year) з методами start(), stop(), getInfo().
// Car додає doors, fuelType.
// ElectricCar додає batteryCapacity, charge(), getRange().
// Всі рівні (класи) перевизначають getInfo().

// Vehicle(brand, year) з методами start(), stop(), getInfo().
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
    this.isMoving = false;
  }
  getInfo() {
    return `${this.brand}, ${this.year}, isMoving: ${this.isMoving}`;
  }
  start() {
    this.isMoving = true;
    return this.getInfo() + ' - Started';
  }
  stop() {
    this.isMoving = false;
    return this.getInfo() + ' - Stopped';
  }
}
const vehicle = new Vehicle('thingamajigs', '2000');
console.log(vehicle);
console.log(vehicle.getInfo());
console.log(vehicle.start());
console.log(vehicle.stop());

// Car додає doors, fuelType.
class Car extends Vehicle {
  constructor(brand, year, doors, fuelType) {
    super(brand, year);
    this.doors = doors;
    this.fuelType = fuelType;
  }
  getInfo() {
    return `${super.getInfo()}, ${this.doors}, ${this.fuelType}`;
  }
}
const carHonda = new Car('honda', '2000', 4, 'patrol');
console.log(carHonda);
console.log(carHonda.getInfo());
console.log(carHonda.start());
console.log(carHonda.stop());

// ElectricCar додає batteryCapacity, charge(), getRange().
class ElectricCar extends Car {
  #chargeLevelPercent = 80;

  constructor(brand, year, doors, fuelType, batteryCapacity) {
    super(brand, year, doors, fuelType);
    this.batteryCapacity = batteryCapacity;
  }
  getInfo() {
    return `${super.getInfo()}, ${this.batteryCapacity}, ${this.#chargeLevelPercent}%`;
  }

  charge(chargePercent) {
    //for simplicity
    this.#chargeLevelPercent += chargePercent;
  }
  getCharge() {
    return this.#chargeLevelPercent;
  }
}
const tron = new ElectricCar('tron', '2015', 4, 'patrol', 1700);
console.log(tron);
console.log(tron.getInfo());
console.log(tron.start());
console.log(tron.stop());
tron.charge(5);
console.log(tron.getCharge());
console.log(tron.getInfo());

// =============

//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.

//Нотатка - це об'єкт із властивостями text і priority.

//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.

//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

class NotesUpdate {
  static Priority() {
    return {
      HIGH: 'high',
      MEDIUM: 'medium',
      LOW: 'low',
    };
  }
  constructor() {
    this.notes = [];
  }
  addNote(note) {
    this.notes.push(note);
  }
  removeNote(text) {
    this.notes = this.notes.filter(note => {
      return note.text !== text;
    });
  }
  updatePriority(text, newPriority) {
    const note = this.notes.find(note => note.text === text);
    if (typeof note !== 'undefined') {
      note.priority = newPriority;
    }
  }
  getJson() {
    return JSON.stringify(this.notes);
  }
}

const notebook = new NotesUpdate();

notebook.addNote({
  text: 'js is the web',
  priority: NotesUpdate.Priority().HIGH,
});
notebook.addNote({
  text: 'hello world',
  priority: NotesUpdate.Priority().HIGH,
});
console.log(notebook.getJson());
console.log(notebook.notes);

notebook.updatePriority('js is the web', NotesUpdate.Priority().LOW);
console.log(notebook.getJson());
console.log(notebook.notes);

notebook.updatePriority('js is the web', NotesUpdate.Priority().MEDIUM);
console.log(notebook.getJson());
console.log(notebook.notes);

notebook.removeNote('hello world');
console.log(notebook.getJson());
console.log(notebook.notes);

class NotesOriginal {
  static Priority() {
    return {
      HIGH: 'high',
      MEDIUM: 'medium',
      LOW: 'low',
    };
  }
  constructor() {
    this.notes = [];
  }
  addNote(note) {
    this.notes.push(note);
  }
  removeNote(text) {
    // this.notes = this.notes.filter(note => {
    //   return note.text !== text;
    // });
    const index = this.notes.findIndex(note => note.text === text);
    if (index !== -1) {
      this.notes.splice(index, 1); //destructive
    }
  }
  updatePriority(text, newPriority) {
    const index = this.notes.findIndex(note => note.text === text);
    if (index !== -1) {
      this.notes[index].priority = newPriority;
    }
  }
}
