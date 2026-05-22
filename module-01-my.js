const message1 = 'global1';
const message2 = 'global2';

function show(message1) {
  message1 += '_function';
  const message2 = 'function2';
  console.log('function:', message1, message2);
}

show(message1, message2);

console.log('global:', message1, message2);
