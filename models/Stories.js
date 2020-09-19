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
        require: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    photo: {
        type: String
    },
    // will be an array of comment ids
    comments: {
        type: Array
    }
});

module.exports = mongoose.model("Stories", StorySchema);