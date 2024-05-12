export class User {
	id
	username
	email
	password
	role

	constructor(id, username, email, password, role) {
		this.id = id
		this.username = username
		this.email = email
		this.password = password
		this.role = role
	}

	getId() {
		return this.id
	}

	setId(newId) {
		this.id = newId
	}

	getUsername() {
		return this.username
	}

	setUsername(newUsername) {
		this.username = newUsername
	}

	getEmail() {
		return this.email
	}

	setEmail(newEmail) {
		this.email = newEmail
	}

	getPassword() {
		return this.password
	}

	setPassword(newPassword) {
		this.password = newPassword
	}

	getRole() {
		return this.role
	}
}
