const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    story_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Comments", CommentSchema);