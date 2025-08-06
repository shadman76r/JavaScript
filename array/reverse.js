const number=[1,2,3,4,5,6];
const reversed=[];
for (let i=0;i<number.length;i++){
    console.log(number[i]);
    // this is new that is unshift means it add the element in the first part
    reversed.unshift(number[i]);
}

for(let i= number.length-1;i>=0;i--){
    reversed.push(number[i]);
}

for (const num of number){
    // console.log(num);
    reversed.unshift(num);
}
console.log(number);
number.reverse();
console.log(number);


// console.log(reversed);