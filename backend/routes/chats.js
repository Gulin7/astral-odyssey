const express = require('express')
const protectRoute = require('../middleware/protectRoute')

const chatsRouter = express.Router()

// Require the controller
const {} = require('../controllers/chatsController')

module.exports = chatsRouter
