const friends=['sakib','akib','rakib','forkruddin'];
friends.sort();
console.log(friends);

const ages = [1,5,100,15,8,2,28];
console.log(ages);
ages.sort();
console.log(ages);

const numbers = [6,5,8,7,9,1];
console.log(numbers);
numbers.sort();
console.log(numbers);

//full new thing 
//new thing need to know how it work
//asending
const sort_ages= ages.sort(function(a,b){return a-b})
console.log(sort_ages);

//desending
const sort_ages_dec = ages.sort(function(a,b){return b-a})
console.log(sort_ages_dec);