const dog = {
  name: 'Mango',
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

console.log('=== JSON.stringify ===');
console.log(JSON.stringify(1)); // 1
console.log(JSON.stringify('one')); // 'one'
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify(null)); // null
console.log(JSON.stringify(undefined)); // undefined

console.log('=== JSON.parse ===');
console.log(JSON.parse(1));
// console.log(JSON.parse('one')); //error
console.log(JSON.parse('{"one":1}')); // obj {"one":1}
console.log(JSON.parse(true)); // true
console.log(JSON.parse(null)); // null
// console.log(JSON.parse(undefined)); //error

console.log('=== JSON.parse(JSON.stringify ===');
console.log(JSON.parse(JSON.stringify(1))); // 1
console.log(JSON.parse(JSON.stringify('one'))); // 'one'
console.log(JSON.parse(JSON.stringify(true))); // true
console.log(JSON.parse(JSON.stringify(null))); // null
// console.log(JSON.parse(JSON.stringify(undefined))); //error

// ============

// const data1 = JSON.parse("Well, this is awkward");
// console.log("You won't see this log");

// const data = JSON.parse('{username: "Mango"}'); // Error
// console.log("You won't see this log");

try {
  const data = JSON.parse('Well, this is awkward');
} catch (error) {
  console.log(error);
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
  console.log(error.stack );
}

console.log('This is fine, we handled parsing error in try...catch');

// =========

// console.log('This message will not appear in the console');
// cos value = 5;

// =========

console.log(window.localStorage);
// Storage {length: 0}

console.log(localStorage);
// Storage {length: 0}

localStorage.setItem("ui-theme", "light")

console.log(localStorage); // Storage {ui-theme: "light", length: 1}

localStorage.setItem("dog",dog) // bad
localStorage.setItem("dog", JSON.stringify(dog)) // good

console.log(localStorage.getItem('dog'));
console.log(localStorage.getItem('dog'));

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
console.log(settings);

localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object

localStorage.setItem("age", 25)

console.log(localStorage.getItem("age"));
console.log( typeof localStorage.getItem("age"));

localStorage.removeItem("ui-theme");

// =======================

sessionStorage.setItem("user-id", "123");
sessionStorage.setItem(
  "tickets",
  JSON.stringify(
    { from: "Lviv", to: "Kyiv", quantity: 2 }
)
);
console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

console.log(sessionStorage.getItem("tickets")); 
console.log( JSON.parse(sessionStorage.getItem("tickets"))); 

console.log(sessionStorage);
