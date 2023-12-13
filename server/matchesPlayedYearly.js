function matchesPlayedYearly(matchesData){
    const matchPlayedPerYear = {};
    matchesData.forEach((match)=>{
        if(!matchPlayedPerYear[match.season]){
            matchPlayedPerYear[match.season]=1;
        }
        else{
            matchPlayedPerYear[match.season] += 1;
        }
    })

    return matchPlayedPerYear;
}

module.exports = matchesPlayedYearly;