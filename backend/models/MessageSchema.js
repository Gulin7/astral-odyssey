const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema

const messageSchema = new Schema(
	{
		senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		message: { type: String, required: true, trim: true },
	},
	{ timestamps: true }
)

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
