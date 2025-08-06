// constant --> value not going to change
// let --> value might be change 
// var --> should not use (unless exceptional cases)

const price= 500;//number
const name = 'me and my name';//string
const ispoor = false;//boolean
const friends = ['name','name','name','name'];//array nonpremetive
const student = {class: 9, name:'name', age : 17, address:'jani na'};//object nonpremitive

// condition
if(price>1000){
    console.log("too expensive");
}
else if (price >500){
    console.log("maybe i can buy");
}
else{
    console.log("within my pricerange");
}

// loop
let pushup = 0;
while(pushup<10){
    console.log('push up', pushup);
    // pushup +=1;
    pushup++;
}