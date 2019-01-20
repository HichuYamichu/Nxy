const db = require('../database/index');
const joi = require('joi');

module.exports = {
	async register(req, res) {
		console.log(db.dbinit());
		const { users } = db.dbinit();
		const schema = {
			email: joi.string().email(),
			password: joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
		};
		const email = await users.findOne({ email: req.body.email });
		try {
			const { error } = joi.validate(req.body, schema);
			if (error) {
				switch (error.details[0].context.key) {
				case 'email':
					throw new Error('Invalid email address');
				case 'password':
					throw new Error('Invalid password');
				default:
					throw new Error('Invalid info');
				}
			}
			if (email) throw new Error('User already exists');
			const user = await users.insertOne({
				email: req.body.email,
				password: req.body.password
			});
			req.session.authUser = user.ops[0];
			return res.json({ email: user.email });
		} catch (err) {
			res.status(401).json({ message: err.message });
		}
	},
	async login(req, res) {
		const { users } = await db.dbinit();
		const { email, password } = req.body;
		try {
			const user = await users.findOne({
				email: email,
				password: password
			});
			if (!user) throw new Error('Wrong credentials');
			req.session.authUser = user;
			return res.json({ email: user.email });
		} catch (err) {
			res.status(401).json({ message: err.message });
		}
	}
};
