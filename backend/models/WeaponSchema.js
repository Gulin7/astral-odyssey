const mongoose = require('mongoose')

const Schema = mongoose.Schema

const weaponSchema = new Schema({
	itemName: {
		type: String,
		required: true,
		unique: true,
	},
	primaryStat: {
		type: Number,
		required: true,
	},
	classes: {
		type: [String],
		required: true,
	},
	itemRarity: {
		type: String,
		required: true,
		enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
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
module.exports = mongoose.model('Weapon', weaponSchema)
