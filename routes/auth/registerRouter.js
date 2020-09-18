const router = require('express').Router();
const bcrypt = require('bcryptjs');
const genToken = require('../../utils/genToken.js');
const verifyBody = require('./verifyBody.js');

const Users = require('../../models/Users.js');

// /api/register
router.post('/', verifyBody, (req, res) => {
    const { password } = req.body;

    const hash = bcrypt.hashSync(password, 6);
    hashedPassword = hash;

    // the object that comes from the req.body does not have a hashed password so here i spread in the body to create the new user and pass
    // in the hashed password for the password field
    const user = new Users({ ...req.body, password: hashedPassword })

    user.save()
    .then(data => {
        const token = genToken(data)
        const user = { id: data._id, username: data.username, email: data.email }
        res.json({user, token });
    })
    .catch(err => {
        res.status(500).json({ message: "There was an issue creating the user". err });
    })
})



module.exports = router;