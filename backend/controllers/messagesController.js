const mongoose = require('mongoose')

const Chat = require('../models/ChatSchema')
const Message = require('../models/MessageSchema')

const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params
		const senderId = req.user._id

		// Find the chat between the sender and the receiver
		const chat = await Chat.findOne({
			users: { $all: [senderId, userToChatId] },
		}).populate('messages') // this gets the actual messages, not just the referennce

		if (!chat) return res.status(200).json([])

		const messages = chat.messages

		res.status(200).json(messages)
	} catch (error) {
		console.log('Error in getMessages: ', error)
		res.status(400).json({ error: 'Internal server error' })
	}
}

const sendMessage = async (req, res) => {
	try {
		// Get receiver id from params, message from body and sender id from req
		const { id: receiverId } = req.params
		const { message } = req.body
		const senderId = req.user._id

		// Find chat between sender and receiver
		let chat = await Chat.findOne({
			users: { $all: [senderId, receiverId] },
		})

		// If chat does not exist, create new chat
		if (!chat) {
			chat = await Chat.create({
				users: [senderId, receiverId],
				messages: [],
			})
		}

		console.log('Sender ID: ', senderId)
		console.log('Receiver ID: ', receiverId)
		console.log('Message: ', message)

		// Create new message between the sender and the receiver
		const newMessage = new Message({
			senderId: senderId,
			receiverId: receiverId,
			message: message,
		})

		console.log(newMessage)

		if (newMessage) {
			const savedMessage = await newMessage.save()

			//Add message to chat
			chat.messages.push(savedMessage._id)

			//Save chat
			const savedChat = await chat.save()
			// await chat.save()
			// await newMessage.save()

			//SOCKET.IO functionality

			//Return new message
			res.status(201).json({ savedMessage })
		}
	} catch (error) {
		console.log('Error in sendMessage: ', error)
		res.status(400).json({ error: 'Internal server error' })
	}
}

module.exports = { getMessages, sendMessage }
