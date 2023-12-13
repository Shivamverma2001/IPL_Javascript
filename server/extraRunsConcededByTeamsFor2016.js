function extraRunsConcededByTeamsFor2016(matchesData, deliveriesData) {
    let extraRunsBowlerWiseFor2016={};
    let idFor2016 = matchesData
        .filter((matchData) => matchData['season'] == 2016)
        .map(matchData => matchData['id']);

    deliveriesData.forEach((deliveryData) => {
        if (idFor2016.includes(deliveryData['match_id'])) {
            if (!extraRunsBowlerWiseFor2016[deliveryData['bowling_team']]) {
                extraRunsBowlerWiseFor2016[deliveryData['bowling_team']] = parseInt(deliveryData['extra_runs']);
            } else {
                extraRunsBowlerWiseFor2016[deliveryData['bowling_team']] += parseInt(deliveryData['extra_runs']);
            }
        }
    });
    return extraRunsBowlerWiseFor2016;
}

module.exports = extraRunsConcededByTeamsFor2016;