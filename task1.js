var money = parseInt(prompt("Enter the amount of money you have"));
// let cost = parseInt(prompt("Enter the cost please of 1 kg of orange and 1 kg of apple"));

// orange price
var orange = parseInt(prompt("Enter the price of one kg orange"));
//apple price
var apple = parseInt(prompt("Enter the price of one kg of apple"));

var oa= orange+apple;
var Total_return= money-oa;

console.log(Total_return);