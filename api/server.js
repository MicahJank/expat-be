const express = require('express');
const apiRouter = require('./apiHandler.js');
const server = express();

const configureMiddleware = require('./configureMiddleware.js');

// middleware is being taken care of in the configureMiddleware.js file
configureMiddleware(server)

server.get('/', (req, res) => {
    res.send(`
    <h1>Expat Journal Server is up and Running</h1>
    `);
});

server.use('/api', apiRouter);

module.exports = server;