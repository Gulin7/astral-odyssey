const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema

const messageSchema = new Schema(
	{
		sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		content: { type: String, required: true, trim: true },
		chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
	},
	{ timestamps: true }
)

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
