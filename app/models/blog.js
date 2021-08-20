const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: True
    },
    body: {
        type: String,
        required: True
    },
    snippet: {
        type: String,
        required: True
    }
}, { timestamps: True });


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;