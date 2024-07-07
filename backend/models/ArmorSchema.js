const mongoose = require('mongoose')

const Schema = mongoose.Schema

const armorSchema = new Schema({
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
		enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
	},
	classes: {
		type: [String],
		required: true,
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
