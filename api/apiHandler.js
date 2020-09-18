const router = require('express').Router();

// sub routers get imported here
const registerRouter = require('../routes/auth/registerRouter.js');
const loginRouter = require('../routes/auth/loginRouter.js');

// use subroutes here
router.use('/register', registerRouter);
router.use('/login', loginRouter);

// base route get Request to make sure api is up and running
router.get('/', (req, res) => {
    res.send('Welcome to the API');
})

module.exports = router;