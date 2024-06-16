const mongoose = require('mongoose')

const Schema = mongoose.Schema

const armorSchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	itemName: {
		type: String,
		required: true,
		unique: true,
	},
	primaryStat: {
		type: Number,
		required: true,
	},
	itemRarity: {
		type: String,
		required: true,
	},
	classes: {
		type: [String],
		required: true,
		unique: false,
	},
	itemDescription: {
		type: String,
		required: true,
	},
	itemPrice: {
		type: Number,
		required: true,
	},
})

module.exports = mongoose.models.Armor || mongoose.model('Armor', armorSchema)
