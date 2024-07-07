const mongoose = require('mongoose')

const Schema = mongoose.Schema

const potionSchema = new Schema({
	itemName: {
		type: String,
		required: true,
		unique: true,
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

module.exports = mongoose.model('Potion', potionSchema)
