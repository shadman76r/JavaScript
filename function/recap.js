function add (price1, price2){
    const total= price1+price2;
    return total;
}
const bill =add(5,80);
console.log(bill);

// short cur
function add2(price1,price2){
    return price1+price2;
}
const bill2= add(5,98)
console.log(bill2);

// another some
function math(num1,num2){
    const sum = num1+num2;
    const diff = num1-num2;
    const multiply = num1*num2;
    const result = multiply/2;
    return result;
}

const result=math(70,5);
console.log(result);

//is even
// conditional return

function iseven(number){
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }

}
console.log(iseven(5));
console.log(iseven(12));

// is odd

function isodd(number){
    if(number%2===1){
        return true;
    }
    return false;
}

console.log(isodd(10));
console.log(isodd(11));