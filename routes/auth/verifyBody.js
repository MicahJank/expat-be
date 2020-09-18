const Users = require('../../models/Users.js');
module.exports = (req, res, next) => {
    const { email, username, password } = req.body;

    if (email && username && password) {
        // findOne promises is always successful, it doesnt throw an error so my check needs to be done inside the .then
        Users.findOne({ email })
            .then(user => {
                if (!user) {
                    next();
                } else {
                    res.status(400).json({ message: `A user with the email ${email} already exists in the database.`})
                }
            })
    } else {
        res.status(400).json({ message: 'Missing body data, please, make sure all body data is being sent in the request.'})
    }
}