const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: Boolean,
		required: true,
	},
})

// static signup method
userSchema.statics.signup = async function (id, username, email, password, role = false) {
	// validation
	if (!id) throw Error('Missing id')
	if (!email) throw Error('Missing email')
	if (!password) throw Error('Missing password')
	if (!username) throw Error('Missing username')
	if (!role) throw Error('Missing role')

	if (!validator.isEmail(email)) throw Error('Invalid email')

	if (password.length < 6) throw Error('Password is too short')

	if (!validator.isAlphanumeric(username)) throw Error('Username must be alphanumeric')

	const existingEmail = await this.findOne({ email: email })
	if (existingEmail) throw Error('Email already exists')

	const existingUsername = await this.findOne({ username: username })
	if (existingUsername) throw Error('Username already exists')

	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(password, salt)

	const user = await this.create({ id, username, email, password: hash, role })

	return user
}

// static login method
userSchema.statics.login = async function (username, password) {
	// validation
	if (!username) throw Error('Missing username')
	if (!password) throw Error('Missing password')

	const user = await this.findOne({ username: username })

	if (!user) throw Error('User not found | schema')

	const match = await bcrypt.compare(password, user.password)
	if (!match) throw Error('Wrong password')

	return user
}

module.exports = mongoose.model('User', userSchema)
