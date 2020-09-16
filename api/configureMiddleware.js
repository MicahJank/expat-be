// import the middleware at the top
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// export a function that takes a server as its parameter and uses server.use on each of the middleware
module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(morgan('dev'));
}