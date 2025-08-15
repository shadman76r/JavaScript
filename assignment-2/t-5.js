function  resultReport( marks ) { 
    if(!Array.isArray(marks)){
        return "Invalid";
    }
    if(marks.length===0){
        return {finalScore: 0, pass: 0, fail: 0};
    }
    let finalNumber = 0;
    let passes = 0;
    let fails = 0;
    for(const numbers of marks){
        finalNumber = finalNumber + numbers;
        if(numbers<40){
            fails++;
        }
        else{
            passes++;
        }
    }

    const average = Math.round(finalNumber/marks.length);
    return{
        finalScore: average, pass: passes, fail: fails
    }
}

console.log(resultReport([]))
console.log(resultReport([98, 87, 67, 91, 92, 33, 87] ))
console.log(resultReport([99, 87, 67, 12 ,87]))
console.log(resultReport([99]))
console.log(resultReport(100))