const server = require('./api/server.js');
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;

// connecting to the mongoDB database using mongoose
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
        console.log("Connected to the Database.")
    })

server.listen(PORT, () => {
    console.log(`\n** Server listening on port ${PORT} **\n`);
});