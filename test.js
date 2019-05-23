let chars = {
    "2305843009310148289": {
        "membershipId": "4611686018468505060",
        "membershipType": 4,
        "characterId": "2305843009310148289",
        "dateLastPlayed": "2019-05-17T20:52:33Z",
        "minutesPlayedThisSession": "87",
        "minutesPlayedTotal": "21379",
        "light": 700,
        "stats": {
            "392767087": 5,
            "1935470627": 700,
            "1943323491": 3,
            "2996146975": 6
        },
        "raceHash": 898834093,
        "genderHash": 3111576190,
        "classHash": 671679327,
        "raceType": 2,
        "classType": 1,
        "genderType": 0,
        "emblemPath": "/common/destiny2_content/icons/38d6d0a92428410e33f365c9795f2671.jpg",
        "emblemBackgroundPath": "/common/destiny2_content/icons/72e35d429f3e159af545b52f4677a910.jpg",
        "emblemHash": 180108390,
        "emblemColor": {
            "red": 0,
            "green": 2,
            "blue": 3,
            "alpha": 255
        },
        "levelProgression": {
            "progressionHash": 1716568313,
            "dailyProgress": 0,
            "dailyLimit": 0,
            "weeklyProgress": 0,
            "weeklyLimit": 0,
            "currentProgress": 482000,
            "level": 50,
            "levelCap": 50,
            "stepIndex": 50,
            "progressToNextLevel": 0,
            "nextLevelAt": 0
        },
        "baseCharacterLevel": 50,
        "percentToNextLevel": 0
    },
    "2305843009423999259": {
        "membershipId": "4611686018468505060",
        "membershipType": 4,
        "characterId": "2305843009423999259",
        "dateLastPlayed": "2019-05-11T11:52:41Z",
        "minutesPlayedThisSession": "1",
        "minutesPlayedTotal": "696",
        "light": 427,
        "stats": {
            "392767087": 4,
            "1935470627": 427,
            "1943323491": 3,
            "2996146975": 3
        },
        "raceHash": 2803282938,
        "genderHash": 2204441813,
        "classHash": 3655393761,
        "raceType": 1,
        "classType": 0,
        "genderType": 1,
        "emblemPath": "/common/destiny2_content/icons/2157aed25709d2536f9821708375e7e2.jpg",
        "emblemBackgroundPath": "/common/destiny2_content/icons/f08e613c555a4e4f9eb818d00365a261.jpg",
        "emblemHash": 2939572589,
        "emblemColor": {
            "red": 7,
            "green": 11,
            "blue": 19,
            "alpha": 255
        },
        "levelProgression": {
            "progressionHash": 1716568313,
            "dailyProgress": 0,
            "dailyLimit": 0,
            "weeklyProgress": 0,
            "weeklyLimit": 0,
            "currentProgress": 350615,
            "level": 39,
            "levelCap": 50,
            "stepIndex": 39,
            "progressToNextLevel": 10615,
            "nextLevelAt": 12000
        },
        "baseCharacterLevel": 39,
        "percentToNextLevel": 88.4583359
    },
    "2305843009434905417": {
        "membershipId": "4611686018468505060",
        "membershipType": 4,
        "characterId": "2305843009434905417",
        "dateLastPlayed": "2019-05-20T23:20:25Z",
        "minutesPlayedThisSession": "0",
        "minutesPlayedTotal": "10594",
        "light": 697,
        "stats": {
            "392767087": 5,
            "1935470627": 697,
            "1943323491": 4,
            "2996146975": 4
        },
        "raceHash": 3887404748,
        "genderHash": 2204441813,
        "classHash": 2271682572,
        "raceType": 0,
        "classType": 2,
        "genderType": 1,
        "emblemPath": "/common/destiny2_content/icons/b9ebe5f4b5362da0f07f7449b6470472.jpg",
        "emblemBackgroundPath": "/common/destiny2_content/icons/40cf702a42a33d6d0050c632808045d3.jpg",
        "emblemHash": 185321778,
        "emblemColor": {
            "red": 2,
            "green": 2,
            "blue": 3,
            "alpha": 255
        },
        "levelProgression": {
            "progressionHash": 1716568313,
            "dailyProgress": 0,
            "dailyLimit": 0,
            "weeklyProgress": 0,
            "weeklyLimit": 0,
            "currentProgress": 482000,
            "level": 50,
            "levelCap": 50,
            "stepIndex": 50,
            "progressToNextLevel": 0,
            "nextLevelAt": 0
        },
        "baseCharacterLevel": 50,
        "percentToNextLevel": 0
    }
};

const fstat = require('./api/filters/stat');

chars = Object.entries(chars).map(char => {
    let [id, data] = char;

    data['stats'] = fstat(data['stats']);

    return data;
});

console.log(chars);