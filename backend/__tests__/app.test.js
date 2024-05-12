const request = require('supertest')
const app = require('../app')
const { default: mongoose } = require('mongoose')

const URI =
	'mongodb+srv://gulin:mamaluinacho232@astral-odyssey-app.sexbors.mongodb.net/?retryWrites=true&w=majority&appName=astral-odyssey-app'

beforeAll(async () => {
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	} catch (error) {}
})

afterAll(async () => {
	try {
		await mongoose.disconnect()
	} catch (error) {}
})

describe('API Tests', () => {
	test('POST /api/players/addPlayer', async () => {
		const response = await request(app).post('/api/players/addPlayer').send({
			id: 5000,
			user_id: 400,
			nickname: 'test',
			pictureURL: 'test',
		})
		expect(response.statusCode).toBe(200)
	}, 100000)

	test('GET /api/players', async () => {
		const response = await request(app).get('/api/players')
		expect(response.statusCode).toBe(200)
		expect(response.body.length).toBeGreaterThan(0)
	})

	test('PUT /api/players/1', async () => {
		const response = await request(app).put('/api/players/500').send({
			id: 500,
			user_id: 400,
			nickname: 'test2',
			pictureURL: 'test2',
		})
		expect(response.statusCode).toBe(200)
	})

	test('DELETE /api/players/1', async () => {
		const response = await request(app).delete('/api/players/500')
		expect(response.statusCode).toBe(200)
	})
})
