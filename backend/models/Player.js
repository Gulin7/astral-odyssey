class PlayerClass {
	id
	userId
	nickname
	pictureUrl

	constructor(id, userId, nickname, pictureUrl) {
		this.id = id
		this.userId = userId
		this.nickname = nickname
		this.pictureUrl = pictureUrl
	}

	getId() {
		return this.id
	}

	setId(newId) {
		this.id = newId
	}

	getuserId() {
		return this.userId
	}

	setuserId(newuserId) {
		this.userId = newuserId
	}

	getNickname() {
		return this.nickname
	}

	setNickname(newNickname) {
		this.nickname = newNickname
	}

	getPictureUrl() {
		return this.pictureUrl
	}

	setPictureUrl(newUrl) {
		this.pictureUrl = newUrl
	}
}

module.exports = PlayerClass
