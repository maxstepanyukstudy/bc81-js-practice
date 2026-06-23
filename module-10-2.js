const promise1 = Promise.reject(5);
const promise2 = Promise.resolve('r32r32');
const promise3 = Promise.resolve({ key1: '13e213' });

// // =================

const tasks = [
    () => {
        return Promise.resolve(4);
    },
    () => {
        return Promise.resolve('hello');
    },
    () => {
        return Promise.resolve({ key: 'OK' });
    },
];
tasks.forEach(task => task().then(value => console.log(value)));

// =================

function myPromiseAll(array) {
  return new Promise((resolve, reject) => {
    const result = [];
    array.forEach(promice => {
      promice.then(value => result.push(value)).catch(reject);
    });
    resolve(result);
  });
}

const promises = [promise1, promise2, promise3];
myPromiseAll(promises)
  .then(result => console.log(result))
