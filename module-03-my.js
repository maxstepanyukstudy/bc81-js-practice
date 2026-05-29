// crazy
const randomIndexArrary = ['init'];
randomIndexArrary[3] = 'a';
randomIndexArrary[5] = 'element';
console.log(randomIndexArrary);

// empty elements become undefined in the end
const normArray = [...randomIndexArrary];
console.log(normArray);

for (const item of randomIndexArrary) {
  if (typeof item === 'undefined') {
    console.log('>skip undefined');
    continue;
  }
  console.log(item);
}

// but dont create arrays like that and it also shouldn't happen irl