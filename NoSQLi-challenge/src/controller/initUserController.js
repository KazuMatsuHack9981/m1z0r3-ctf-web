const InitUser = require('../models/User');

const user = () => {
	let initUser = new InitUser({
		username: "admin",
		password: "m1z0r3{mongodb_is_nosql}"
	})
	initUser.save((error, data) => {
		if (error) {
			console.log(error);
		}
		console.log(data);
	})

	let initUser2 = new InitUser({
		username: "admin",
		password: "mmmmmmimmmmmmm_mm_mmmmmi"
	})
	initUser2.save((error, data) => {
		if (error) {
			console.log(error);
		}
		console.log(data);
	})

	let initUser3 = new InitUser({
		username: "test",
		password: "passwd"
	})
	initUser3.save((error, data) => {
		if (error) {
			console.log(error);
		}
		console.log(data);
	})
}

module.exports = { user };
