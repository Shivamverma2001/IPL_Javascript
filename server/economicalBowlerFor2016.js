function economicalBowlerFor2016(matchesData,deliveriesData){
    const bowlersEconomyFor2016={};
    const idFor2016=matchesData
    .filter((matchData)=>matchData['season']==2016)
    .map((matchData)=>matchData['id']);

    deliveriesData.forEach((deliveryData)=>{
        if(idFor2016.includes(deliveryData['match_id'])){
            let runs=parseInt(deliveryData['total_runs'])-parseInt(deliveryData['legbye_runs'])-parseInt(deliveryData['bye_runs'])-parseInt(deliveryData['penalty_runs']);
            let ballsFaced=parseInt(deliveryData['wide_runs'])==0&&parseInt(deliveryData['noball_runs'])==0?1:0;

            if(!bowlersEconomyFor2016[deliveryData['bowler']]){
                bowlersEconomyFor2016[deliveryData['bowler']]={ball:0,run:0};
            }else{
                let totalBall=bowlersEconomyFor2016[deliveryData['bowler']].ball;
                totalBall+=ballsFaced;
                let totalRun=bowlersEconomyFor2016[deliveryData['bowler']].run;
                runs+=totalRun;

                bowlersEconomyFor2016[deliveryData['bowler']].ball=totalBall;
                bowlersEconomyFor2016[deliveryData['bowler']].run=runs;
            }
        }
    });

    for(let bowlers in bowlersEconomyFor2016) {
        let bowlerEco=(bowlersEconomyFor2016[bowlers].run*6.0)/bowlersEconomyFor2016[bowlers].ball;

        delete bowlersEconomyFor2016[bowlers].ball;
        delete bowlersEconomyFor2016[bowlers].run;

        bowlersEconomyFor2016[bowlers].economy=bowlerEco;
    }

    const sortedBowlersEconomyFor2016 = Object.entries(bowlersEconomyFor2016);
    sortedBowlersEconomyFor2016.sort((bowler1, bowler2) => {
        return parseFloat(bowler1[1]['economy']) - parseFloat(bowler2[1]['economy']);
    })
   
    return sortedBowlersEconomyFor2016;
}
module.exports=economicalBowlerFor2016;