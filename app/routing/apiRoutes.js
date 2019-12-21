const express = require('express')
const router = express.Reouter()
router.get('/', (req, res) => {
    console.log((`server was hit`));

})
module.exports = router;
// const express = require('express')
// const router = express.Router()
// router.get('/', (req, res) => {
//     console.log('server was hit');
// })
// module.exports = router;