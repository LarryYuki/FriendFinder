const dummydata = require('../public/assets/friends.js')
console.log(dummydata);

//when someone completes the survey, they will send their answers in the body of the the post request
let newFriend = {
    name: "newguy",
    scores: [3, 3, 4]
}

let bestMatch;
let closestScore = 1000;
dummydata.forEach(dummy => {
    let dummydiff = 0
    console.log(dummy.name)
    dummy.scores.forEach((score, index) => {
        let questiondiff = Math.abs(score - newFriend.scores[index])
        console.log(questiondiff)
        dummydiff += questiondiff
    })
    console.log(dummy.name, dummydiff)
    if (dummydiff < closestScore) {
        bestMatch = dummy.name;
        closestScore = dummydiff
    }

})
console.log(`the best match is ${bestMatch} with a difference of ${closestScore}`)