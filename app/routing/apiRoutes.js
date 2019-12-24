const express = require('express')
const dummydata = require('../public/assets/friends.js')
const router = express.Router()
const db = require('../public/assets/friends.js')
router.get('/friends', (req, res) => {
    console.log((`server was hit`));
    res.send(db)

})
router.post('/friends', (req, res) => {
    let newUser = req.body
    db.push(newUser)
    res.send(req.body)

})
let newFriend = {
    name: "newguy",
    scores: []
}

let bestMatch;
let closestScore = 100;
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
module.exports = router;