const mongoose = require('mongoose')

const Schema = mongoose.Schema

const areaSchema = new Schema({
	areaName: {
		type: String,
		required: true,
		unique: true,
	},
	areaDescription: {
		type: String,
		required: true,
	},
	areaMinimumLevel: {
		type: Number,
		required: true,
	},
	areaBoss: {
		type: { type: mongoose.Schema.Types.ObjectId, ref: 'Monster' },
		required: true,
	},
	areaMonsters: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Monster', default: [] }],
		required: true,
	},
	areaPictureURL: {
		type: String,
		required: true,
	},
})

const Area = mongoose.model('Area', areaSchema)

module.exports = Area
