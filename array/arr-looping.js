const fruits =['apple','banana','anar','watermelon','Daav','Taal'];
console.log(fruits[1]);
// using for loop
for (let i=0;i< fruits.length ;i++){
    // console.log(i);
    console.log(fruits[i]);

}

const number =[12,12,12,23,23,23,45,454,54,545,55];
for( let i=0; i<number.length;i++){
    console.log(number[i]);
}
// using while loop
let k=0;
while(k<fruits.length){
    console.log(fruits[k]);
    k++;
}

let m=0;
while(m<number.length){
    console.log(number[m]);
    m++;
}