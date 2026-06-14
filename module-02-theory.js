let x = 5;
const y = ++x;
console.log(x); // 6
console.log(y); // 6

// ================


function calculateEvenTotal(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(calculateEvenTotal(6)); //12

// ================

const start = 6;
const end = 17;
let number;

for (let i = start; i <= end; i++){
  if (i % 5 === 0){
    number = i;
    break;
  }
}

console.log(number)

// ================
