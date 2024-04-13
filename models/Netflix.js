const mongoose = require('mongoose')

const NetflixSchema = new mongoose.Schema({
   name: String,
   email: String,
   password: String
})

const NetflixModel = mongoose.model("users", NetflixSchema)

module.exports = NetflixModel