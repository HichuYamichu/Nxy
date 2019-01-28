/* eslint-disable newline-per-chained-call */
const collections = require('../database/collections');
const joi = require('joi');
const bcrypt = require('bcrypt');

module.exports = {
	async register(req, res) {
		const { users } = await collections();
		const schema = {
			username: joi.string().alphanum().min(3).max(30),
			password: joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
		};

		try {
			const username = await users.findOne({ username: req.body.username });
			if (username) throw new Error('User already exists');

			const { error } = joi.validate(req.body, schema);
			if (error) {
				switch (error.details[0].context.key) {
				case 'username':
					throw new Error('Invalid username');
				case 'password':
					throw new Error('Invalid password');
				default:
					throw new Error('Invalid info');
				}
			}

			bcrypt.hash(req.body.password, 10, async (err, hash) => {
				const user = await users.insertOne({
					username: req.body.username,
					password: hash,
					type: 'normal'
				});
				req.session.authUser = user.ops[0];
				return res.json({ username: user.ops[0].username, type: user.ops[0].type });
			});
		} catch (err) {
			res.status(401).json({ message: err.message });
		}
	},
	async login(req, res) {
		const { users } = await collections();
		const { username, password } = req.body;

		try {
			const user = await users.findOne({
				username: username
			});

			if (!user) throw new Error('Wrong username');

			bcrypt.compare(password, user.password, (err, valid) => {
				if (valid) {
					req.session.authUser = user;
					res.json({ username: user.username, type: user.type });
				} else {
					res.status(401).json({ message: 'Wrong password' });
				}
			});
		} catch (err) {
			res.status(401).json({ message: err.message });
		}
	}
};
