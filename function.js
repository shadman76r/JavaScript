// console.log("learning function on javascript");
function name(){
    console.log("This is the function");
}
name();

function money_bag(){
    var money = 1000;
    console.log("I have" + money + "taka");
}

money_bag();
// summation

// addition

function calculator(input1,input2){
    let sum= input1+input2;
    console.log("sum is " + sum);
    // this is the important part for outer access
    return sum ;

}

const result = calculator(10,40);
console.log(result);

// substraction

function calculator(input1,input2){
    let sum= input1-input2;
    console.log("sum is " + sum);
    // this is the important part for outer access
    return sum ;

}

const result_sub = calculator(10,40);
console.log(result_sub);

// mul
function calculator(input1,input2){
    let sum= input1*input2;
    console.log("sum is " + sum);
    // this is the important part for outer access
    return sum ;

}

const result_mul = calculator(10,40);
console.log(result_mul);

// subs

function calculator(input1,input2){
    let sum= input1/input2;
    console.log("sum is " + sum);
    // this is the important part for outer access
    return sum ;

}

const result_subs = calculator(10,40);
console.log(result_subs);