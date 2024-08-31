const mongoose = require('mongoose');

// Define the Post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: Object,
        unique: true,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
