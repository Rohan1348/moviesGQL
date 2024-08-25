const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    id: String,
    title: String,
    director_id: String,
    genre: String,
    year: Number,
    duration: String,
    budget: String
})

module.exports = mongoose.model('Movie', movieSchema);