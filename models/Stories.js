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
    user_id: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    photo: {
        type: String
    },
});

module.exports = mongoose.model("Stories", StorySchema);