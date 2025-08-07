function eat (){
    console.log("you can eat anywhere")
    console.log("take food in your plates")
}
eat();

// square

function square(number){
    console.log(number);
    console.log('value of the number parameter: ', number);
    const borgo = number * number;
    console.log('square of the given number is: ', borgo)
}

square(4);
console.log('..............')
square(13);


// 
function add(number1, number2){
    const sum= number1+number2;
    console.log(sum);

}
add(5,71);
add(65,31);

//another one

function addAll(a,b,c,d,e){
    const total= a+b+c+d+e;
    console.log(total);
}

addAll(3,4,5,7,8);
addAll(3,4,5,7,0);