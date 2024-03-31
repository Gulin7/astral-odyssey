require('dotenv').config()

const express = require('express')
const playerRoutes = require('./routes/players')
const mongoose = require('mongoose')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

//routes
app.use('/api', playerRoutes)

//connect to mongodb
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		//listen for requests
	})
	.catch((err) => console.log(err))

//listen for requests
app.listen(process.env.PORT, () => {
	console.log('Server started on port ' + process.env.PORT)
})
