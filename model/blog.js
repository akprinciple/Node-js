const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: String
})
module.exports = mongoose.model('blogContent', blogSchema)

