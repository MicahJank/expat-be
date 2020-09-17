const router = require('express').Router();

// sub routers get imported here
const registerRouter = require('../routes/auth/registerRouter.js');

// use subroutes here
router.use('/register', registerRouter);

// base route get Request to make sure api is up and running
router.get('/', (req, res) => {
    res.send('Welcome to the API');
})

module.exports = router;