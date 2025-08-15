function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let fine = fare + (fare * 20 / 100) + 30;
    return fine;
}

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let onlyCharacters = str.split(" ").join("");
    return onlyCharacters.toUpperCase();
}

function  bestTeam( player1, player2 ) { 
    if(typeof player1 !== "object" || typeof player2 !== "object"){
        return "Invalid";
    }
    const teamFirst = player1.foul + player1.cardY + player1.cardR;
    const teamSecond = player2.foul + player2.cardY + player2.cardR;

    if(teamFirst<teamSecond){
        return player1.name;
    }
    else if(teamSecond<teamFirst){
        return player2.name;
    }
    else{
        return "Tie";
    }
}


function  isSame(arr1 , arr2 ) { 
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid";
    }
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}


function  resultReport( marks ) { 
    if(!Array.isArray(marks)){
        return "Invalid";
    }
    if(marks.length === 0){
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