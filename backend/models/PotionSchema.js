const mongoose = require('mongoose')

const Schema = mongoose.Schema

const potionSchema = new Schema({})

module.exports = mongoose.model('Potion', potionSchema)
