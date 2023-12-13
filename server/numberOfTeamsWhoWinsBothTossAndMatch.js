function numberOfTeamsWhoWinsBothTossAndMatch(matchesData){
    const teamsWhoWinsBothTossAndMatch={};

    matchesData.forEach((matchData)=>{
        if(matchData['winner'] && matchData['winner'] === matchData['toss_winner']){
        if (!teamsWhoWinsBothTossAndMatch[matchData['winner']]){
            teamsWhoWinsBothTossAndMatch[matchData['winner']]=1;
        }else{
            teamsWhoWinsBothTossAndMatch[matchData['winner']]+=1;
        }
    }
    });
    return teamsWhoWinsBothTossAndMatch;
}
module.exports=numberOfTeamsWhoWinsBothTossAndMatch;
