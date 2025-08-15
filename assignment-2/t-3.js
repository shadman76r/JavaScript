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