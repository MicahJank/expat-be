const jwt = require('jsonwebtoken');

function genToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email
    };

    const options = { expiresIn: '1d' };
    const signedToken = jwt.sign(payload, process.env.JWT_SECRET, options);

    return signedToken;
}

module.exports = genToken;