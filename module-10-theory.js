console.log(new Date('2030')); // "Tue Jan 01 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03')); // "Fri Mar 01 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03-16')); // "Sat Mar 16 2030 02:00:00 GMT+0200"
console.log(new Date('2030-03-16T14:25:00')); // "Sat Mar 16 2030 14:25:00 GMT+0200"
console.log(new Date(2030, 2, 16, 14, 25, 0, 0)); // "Sat Mar 16 2030 14:25:00 GMT+0200 "

//from 1970-1-1
console.log(new Date(0)); // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"
console.log(new Date(0).getTime());
console.log(new Date(15000)); // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
console.log(new Date(15000).getTime());

//now
console.log(new Date().getTime());
console.log(Date.now());

// =========

const startTime = Date.now();

// Твій код, виконуваний упродовж деякого часу
let number = 1;
for (let i = 0; i <= 100; i += 1) {
  console.log(i); //relatively slow
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);

// =========

const dateString = 'March 16, 2030 14:25:00';
console.log('dateString: ', dateString);

const date = new Date(dateString);
console.log('Date: ', date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
console.log('Day: ', date.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log('Day of the week: ', date.getDay()); // 6

// Повертає місяць від 0 до 11
console.log('Month: ', date.getMonth()); // 2

// Повертає рік з 4 цифр
console.log('Full year: ', date.getFullYear()); // 2030

// Повертає години
console.log('Hours: ', date.getHours()); // 14

// Повертає хвилини
console.log('Minutes: ', date.getMinutes()); // 25

// Повертає секунди
console.log('Seconds: ', date.getSeconds()); // 0

// Повертає мілісекунди
console.log('Milliseconds: ', date.getMilliseconds()); // 0

// Все, що можна прочитати — можна записати, методи для запису починаються з префікса set.

date.setMinutes(50);
console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040);
console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

date.setMonth(4);
console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"

// ================

const promise0 = new Promise((resolve, reject) => {
  // Asynchronous operation
});

// ================

const isSuccess1 = true;

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess1) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 500);
});

console.log(promise1); // Об'єкт промісу

setTimeout(() => console.log(promise1), 1000);

// =========

const promiseRejected = new Promise((resolve, reject) => {
  reject('Error! Error passed to reject function');
});

// =========

const isSuccess2 = true;

// Create promise
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess2) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Registering promise callbacks
// promise2.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// Якщо функції onResolve і onReject містять складну логіку, їх для зручності оголошують як зовнішні функції і передають у метод then() за ім'ям.

promise2.then(onPromise2Success, onPromise2Error);
function onPromise2Success(value) {
  console.log(value); // "Success! Value passed to resolve function"
}
function onPromise2Error(error) {
  console.log(error); // "Error! Error passed to reject function"
}

// ========================

const isSuccess3 = true;

// Create promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess3) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise3
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

// =========================

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise4
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

