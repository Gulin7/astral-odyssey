const mongoose = require('mongoose')

const Schema = mongoose.Schema

const potionSchema = new Schema({
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
	itemRarity: {
		type: String,
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

module.exports = mongoose.model('Potion', potionSchema)
