const fs=require('fs');
const csv=require('csv-parser');

const matchesFilePath='./Data/matches.csv'
const deliveriesFilePath='./Data/deliveries.csv'

const matchData=[];
fs.createReadStream(matchesFilePath)
.pipe(csv())
.on('data',(rows)=>{
    matchData.push(rows);
})
.on('end',()=>{
    const deliveryData=[];
    fs.createReadStream(deliveriesFilePath)
    .pipe(csv())
    .on('data',(rows)=>{
        deliveryData.push(rows);
    })
    .on('end',()=>{
        const matchesPlayedYearly = require('./server/matchesPlayedYearly');
        const matchesWonByTeamForAllTheYears=require('./server/matchesWonByTeamForAllTheYears');
        const extraRunsConcededByTeamsFor2016=require('./server/extraRunsConcededByTeamsFor2016');
        const economicalBowlerFor2016=require('./server/economicalBowlerFor2016');
        const numberOfTeamsWhoWinsBothTossAndMatch=require('./server/numberOfTeamsWhoWinsBothTossAndMatch.js')

        const matchesPlayedYearlyResult = matchesPlayedYearly(matchData);
        const matchesWonByTeamForAllTheYearsResult=matchesWonByTeamForAllTheYears(matchData);
        const extraRunsConcededByTeamsFor2016Result=extraRunsConcededByTeamsFor2016(matchData,deliveryData);
        const economicalBowlerFor2016Result=economicalBowlerFor2016(matchData,deliveryData);
        const numberOfTeamsWhoWinsBothTossAndMatchResult=numberOfTeamsWhoWinsBothTossAndMatch(matchData);

        fs.writeFileSync('./output/matchesPerYear.json',JSON.stringify(matchesPlayedYearlyResult,null,2));
        fs.writeFileSync('./output/matchesWonByTeamForAllTheYears.json',JSON.stringify(matchesWonByTeamForAllTheYearsResult,null,2));
        fs.writeFileSync('./output/extraRunsConcededByTeamsFor2016.json',JSON.stringify(extraRunsConcededByTeamsFor2016Result,null,2));
        fs.writeFileSync('./output/economicalBowlerFor2016.json',JSON.stringify(economicalBowlerFor2016Result,null,2));
        fs.writeFileSync('./output/numberOfTeamsWhoWinsBothTossAndMatch.json',JSON.stringify(numberOfTeamsWhoWinsBothTossAndMatchResult,null,2));

    })
})