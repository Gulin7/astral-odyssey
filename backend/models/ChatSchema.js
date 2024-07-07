const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema

const chatSchema = new Schema(
	{
		chatName: { type: String, required: true, trim: true },
		isGroupChat: { type: Boolean, default: false },
		users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
		latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
		groupAdmin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
)

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
