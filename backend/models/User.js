export class User {
	username
	email
	password
	role

	constructor(username, email, password, role) {
		this.username = username
		this.email = email
		this.password = password
		this.role = role
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
