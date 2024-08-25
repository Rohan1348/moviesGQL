const mongoose = require('mongoose')

const directorSchema = new mongoose.Schema({
    id: String,
    name: String,
    nationality: String,
    birth_year: String
})

module.exports = mongoose.model('Director', directorSchema);