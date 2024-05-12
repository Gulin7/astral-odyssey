const express = require('express')
const usersRouter = express.Router()

const { loginUser, signupUser } = require('../controllers/usersController')

const User = require('../models/UserSchema')

usersRouter.post('/login', loginUser)

usersRouter.post('/signup', signupUser)

module.exports = usersRouter
