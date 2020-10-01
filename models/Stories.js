const mongoose = require('mongoose');

const StorySchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    user: {
        user_id: String,
        username: String,
        profile_pic: {
            data: Buffer,
            contentType: String
        },
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    photo: {
        data: Buffer,
        contentType: String
    },
});

module.exports = mongoose.model("Stories", StorySchema);