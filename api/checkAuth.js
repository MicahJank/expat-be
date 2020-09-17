const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // a user that already has the decodedJwt does not need to keep re verifying so we can skip in those cases
    if (req.decodedJwt) {
        next();
    } else if(req.headers.authorization) {
        let token = req.headers.authorization;
        // any token that gets sent to this backend should have a Bearer type included, this provides extra security but since we dont want
        // the 'Bearer' string included in our token for verification we will need to remove it first before we verify

        // checks to see if the string has Bearer in it, if it does we can keep the token as is, if it doesnt that means the client forgot to
        // add it to their token so we should send back an error
        token.includes('Bearer ') ? token : res.status(400).json({ message: "Unable to verify authorization header type." });
        
        // Bearer with a space is 7 characters long, so we slice out everything after 7 characters to get the full token, trim is used as 
        // clean up for any white space that may have accidentally been added by the client
        token = token.slice(7, token.length).trim();

        jwt.verify(token, process.env.JWT_SECRET, (err, decodedJwt) => {
            if(err) {
                res.status(400).json({ message: 'Unable to verify token', error: err })
            } else {
                req.decodedJwt = decodedJwt;
                next();
            }
        })
    } else {
        res.status(401).json({ message: "You dont have authorization, please provide the correct token in the header." })
    }
}