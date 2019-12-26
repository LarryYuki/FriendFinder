const express = require('express')
const router = express.Router()
const db = require('../public/assets/friends.js')
router.get('/friends', (req, res) => {
    console.log((`server was hit`));
    res.send(db)

})
router.post('/friends', (req, res) => {
    let newFriend = req.body

    let bestMatch;
    let closestScore = 100;
    db.forEach(dummy => {
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
    console.log('before', db)
    db.push(newFriend)
    console.log('after', db)
    console.log(`the best match is ${bestMatch} with a difference of ${closestScore}`)
    res.send(bestMatch)
})
// let newFriend = {
//     name: "newguy",
//     scores: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
// }

module.exports = router;