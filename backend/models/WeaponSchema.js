const mongoose = require('mongoose')

const Schema = mongoose.Schema

const weaponSchema = new Schema({})

module.exports = mongoose.model('Weapon', weaponSchema)
