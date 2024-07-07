class PlayerClass {
	id
	userId
	nickname
	pictureUrl

	constructor(userId, nickname, pictureUrl) {
		this.userId = userId
		this.nickname = nickname
		this.pictureUrl = pictureUrl
	}

	getUserId() {
		return this.userId
	}

	setUserId(newuserId) {
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
