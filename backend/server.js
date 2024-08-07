require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const http = require('http')

const server = http.createServer(app)

const MONGO_URI =
	process.env.MONGO_URI ||
	'mongodb+srv://gulin:mamaluinacho232@astral-odyssey-app.sexbors.mongodb.net/?retryWrites=true&w=majority&appName=astral-odyssey-app'

const PORT = process.env.PORT || 5000

// connect to mongodb
mongoose
	.connect(MONGO_URI)
	.then(() => {
		//listen for requests
		server.listen(PORT, () => {
			console.log('Server started on port ' + PORT)
		})
	})
	.catch((err) => {
		console.log(err)
	})

//ADD PLAYERS AUTOMATICALLY WITH FAKER AND SOCKET.IO

// const socketio = require('socket.io')
// const PlayerClass = require('./models/Player')
// const Player = require('./models/PlayerSchema')
// const io = new Server(server)

// const axios = require('axios')
// const faker = require('faker')
// const { Server } = require('socket.io')

// const addPlayer = async () => {
// 	const players = await Player.find().sort({ id: 1 })
// 	let id = 0
// 	for (let i = 0; i < players.length; i++) {
// 		if (players[i].id != i + 1) {
// 			id = i + 1
// 			break
// 		}
// 	}
// 	if (id == 0) id = players.length + 1
// 	console.log(id)
// 	pictures = ['profile-1.png', 'profile-2.png', 'profile-3.png', 'profile-4.png']
// 	const userId = 1
// 	const nickname = faker.random.word()
// 	const pictureURL = faker.random.arrayElement(pictures)
// 	return { id, userId, nickname, pictureURL }
// }

// io.on('connection', (socket) => {
// 	setInterval(async () => {
// 		try {
// 			let { id, userId, nickname, pictureURL } = await addPlayer()
// 			const player = await Player.create({ id, user_id: userId, nickname, pictureURL })
// 			socket.emit('player', { id, user_id: userId, nickname, pictureURL })
// 		} catch (error) {}
// 	}, 500000)
// })
