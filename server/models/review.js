const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    id: String,
    rating: String,
    content: String,
    reviewer_name: String,
    movie_id: String
})

module.exports = mongoose.model('Review', reviewSchema);