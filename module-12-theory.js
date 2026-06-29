// debugger;

// !!! im adding 'await' to see in order. aka ,aking async behave like sync

// ===================

const fetchUsers1 = () => { // verbose
  axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    console.log(response.data);
  });
};

const fetchUsers2 = async () => { //consise
  // debugger;
  // console.log("before await");
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  // console.log('after await');
  // console.log('before log');
  // console.log(response.data);
  // console.log('after log');
  // console.log('before return');
  return response.data;
};

// debugger;

console.log('before regular promice log');
fetchUsers2().then(users => console.log(users)); //continus independetly
console.log('after regular promice log');

console.log('before await promice log');
console.log(await fetchUsers2()); //holds the cpu (as intended)
console.log('after await promice log');

// =================

const fetchUsers3 = async link => {
  debugger;

  console.log('fetchUsers3 Before try...catch');
  try {
    const response = await axios.get(link);
    console.log(response.data);
  } catch (error) {
    console.log('Помилка при отриманні користувачів:', error);
  }
  console.log('fetchUsers3 After try...catch');
};

await fetchUsers3('https://jsonplaceholder.typicode.com/users'); //ok
await fetchUsers3('https://jsonplaceholder.typicode.com/users1'); //bad

// ===================

const fetchUsers4 = async link => {
  const response = await axios.get(link);
  return response.data;
};

await fetchUsers4('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log(users))
  .catch(error => console.log('Помилка:', error));

await fetchUsers4('https://jsonplaceholder.typicode.com/users1')
  .then(users => console.log(users))
  .catch(error => console.log('Помилка:', error));

try {
  console.log('try - begin');
  await fetchUsers4('https://jsonplaceholder.typicode.com/users1')
    .then(users => console.log(users))
    .catch(error => console.log('Помилка:', error)); //caught here
  console.log('try - end');
} catch (error) {
  console.log('begin - catch');
  console.log('Помилка:', error);
  console.log('begin - catch');
}

try {
  console.log('try - begin');
  await fetchUsers4('https://jsonplaceholder.typicode.com/users1')
    .then(users => console.log(users))
    // without catch
  console.log('try - end');
} catch (error) {
  console.log('begin - catch');
  console.log('Помилка:', error); //caught here
  console.log('end - catch');
}

const doStuff = async link => {
  try {
    const users = await fetchUsers4(link);
    console.log(users);
  } catch (error) {
    console.log('Помилка в doStuff:', error);
  }
};

await doStuff('https://jsonplaceholder.typicode.com/users');
await doStuff('https://jsonplaceholder.typicode.com/users1');


