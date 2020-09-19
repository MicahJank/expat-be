const router = require('express').Router();
const bcrypt = require('bcryptjs');
const genToken = require('../../utils/genToken.js');

// all the user data is stored in the Users database document
// so i need to get that document here
const Users = require('../../models/Users.js');

router.post('/', verifyBody, (req, res) => {
    const { password, email } = req.body;
    Users.findOne({ email })
    .then(user => {
        if (bcrypt.compareSync(password, user.password)) {
            const token = genToken(user);
            userInfo = {id: user._id, username: user.username, email: user.email};
            res.json({ userInfo, token });
        } else {
            res.status(401).json({ error: "Invalid Credentials" });
        }
    })
    .catch(error => {
        res.status(404).json({ message: 'Unable to find user in the database', error });
    })
})



function verifyBody(req, res, next) {
    if (req.body.email && req.body.password) {
        next()
    } else {
        res.status(401).json({ message: "Missing body information, make sure you are sending an email and password in the body request." });
    }
}

module.exports = router;