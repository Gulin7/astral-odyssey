const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	charClass: {
		type: String,
		required: true,
	},
	race: {
		type: String,
		required: true,
	},
	playerId: {
		type: Number,
		required: true,
	},
	skinURL: {
		type: String,
		required: true,
	},
	level: {
		type: Number,
		required: true,
	},
})

module.exports = mongoose.model('Character', characterSchema)
