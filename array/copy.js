let price = 25;
let com_price = price;
com_price= 20;
console.log(price);
console.log(com_price);

const products = [25,25,30];
const com_products = products;

console.log(products);
console.log(com_products);

const numbers = [1,2,3,4,5];
const new_numbers = Array.from(numbers);
console.log(numbers);
console.log(new_numbers);
// it can be used
// const new_numbers = [].concat(numbers)
//new concept
// const new_numbers= [...numbers];
// numbers.push(99);


// shallow copy vs deep array what is this can i solve this problem by my own