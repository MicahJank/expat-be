const router = require('express').Router();

// sub routers get imported here


// use subroutes here


// base route get Request to make sure api is up and running
router.get('/', (req, res) => {
    res.send('Welcome to the API');
})

module.exports = router;