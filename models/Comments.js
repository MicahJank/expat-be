const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    user: {
        user_id: String,
        username: String,
        profile_pic: {
            data: Buffer,
            contentType: String
        },
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