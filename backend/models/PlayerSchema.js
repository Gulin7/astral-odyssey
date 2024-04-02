const mongoose = require('mongoose')

const Schema = mongoose.Schema

const playerSchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
	},
	nickname: {
		type: String,
		required: true,
	},
	pictureURL: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Player', playerSchema)
