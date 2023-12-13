function matchesWonByTeamForAllTheYears(matchesData){
    let matchesWonByTeam={};

    matchesData.forEach((match)=>{
        if(match['winner']!=''){
        if(!matchesWonByTeam[match['winner']]){
            matchesWonByTeam[match['winner']]=1;
        }else{
            matchesWonByTeam[match['winner']]+=1;
        }
    }
    })

    return matchesWonByTeam;
}

module.exports=matchesWonByTeamForAllTheYears;