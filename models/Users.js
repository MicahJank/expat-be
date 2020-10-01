const mongoose = require('mongoose');
const Stories = require('./Stories.js');

// creating the schema for the user is like creating the table columns and rows in a migration file using knex
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // array of stories
    saved_stories: [Stories]
})

module.exports = mongoose.model("Users", UserSchema);