const router = require('express').Router();
const User = require('../../models/Users.js');

router.get('/:userId', (req, res) => {
    const { userId } = req.params;

    User.findById(userId)
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
})


module.exports = router;