const express = require('express')

// Create the router
const messagesRouter = express.Router()

// Require the protectRoute middleware
const protectRoute = require('../middleware/protectRoute')

// Require the controller
const { getMessages, sendMessage } = require('../controllers/messagesController')

// GET messages
messagesRouter.get('/:id', protectRoute, getMessages)

// POST a new message
messagesRouter.post('/send/:id', protectRoute, sendMessage)

module.exports = messagesRouter
