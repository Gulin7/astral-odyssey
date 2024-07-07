const mongoose = require('mongoose')

const Schema = mongoose.Schema

const playerSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
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
