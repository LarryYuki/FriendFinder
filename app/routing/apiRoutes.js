const express = require('express')
const router = express.Router()
const db = require('../data/dummydata.js')
router.get('/friends', (req, res) => {
    console.log((`server was hit`));
    res.send(db)

})
router.post('/friends', (req, res) => {
    let newUser = req.body
    db.push(newUser)
    res.send(req.body)

})
module.exports = router;