function getFileName(file) {
  const dotIndex = file.indexOf('.');

  if (dotIndex === -1) {
    return file;
  }

  return file.slice(0, dotIndex);
}

console.log(getFileName('styles.css'));
console.log(getFileName('app.js'));
console.log(getFileName('app'));
console.log(getFileName('index.js'));
console.log(getFileName('index.html'));
console.log(getFileName('index.css'));
console.log(getFileName('index'));

// ================

// from HW 2 test 04 with my tests

function getShippingCost(country) {
  switch (country) {
    case 'China':
      return 'Shipping to China will cost 100 credits';
    case 'Chile':
      return 'Shipping to Chile will cost 250 credits';
    case 'Australia':
      return 'Shipping to Australia will cost 170 credits';
    case 'Jamaica':
      return 'Shipping to Jamaica will cost 120 credits';
    default:
      return 'Sorry, there is no delivery to your country';
  }
}

// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

function getShippingCost_2nd(country) {
  let shippingCost;

  switch (country) {
    case 'China':
      shippingCost = 100;
      break;
    case 'Chile':
      shippingCost = 250;
      break;
    case 'Australia':
      shippingCost = 170;
      break;
    case 'Jamaica':
      shippingCost = 120;
      break;
  }

  if (typeof shippingCost === 'undefined') {
    return 'Sorry, there is no delivery to your country';
  }

  return `Shipping to ${country} will cost ${shippingCost} credits`;
}

// console.log(getShippingCost_2nd('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost_2nd('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost_2nd('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost_2nd('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost_2nd('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost_2nd('Sweden')); // "Sorry, there is no delivery to your country"

function getShippingCost_3nd(country) {
  let shippingCost;
  let canDeliver;

  switch (country) {
    case 'China':
      shippingCost = 100;
      canDeliver = true;
      break;
    case 'Chile':
      shippingCost = 250;
      canDeliver = true;
      break;
    case 'Australia':
      shippingCost = 170;
      canDeliver = true;
      break;
    case 'Jamaica':
      shippingCost = 120;
      canDeliver = true;
      break;
    default:
      canDeliver = false;
  }

  if (!canDeliver) {
    return 'Sorry, there is no delivery to your country';
  }

  return `Shipping to ${country} will cost ${shippingCost} credits`;
}

console.log(getShippingCost_3nd('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost_3nd('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost_3nd('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost_3nd('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost_3nd('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost_3nd('Sweden')); // "Sorry, there is no delivery to your country"

// ================
