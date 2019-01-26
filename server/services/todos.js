const collections = require('../database/collections');

module.exports = {
	async save(req, res) {
		const { todos } = await collections();
		if (req.session.authUser) {
			todos.insertOne({ title: req.body.title, description: req.body.description });
			res.sendStatus(200);
		} else {
			res.sendStatus(401);
		}
	},
	async fetch(req, res) {
		const { todos } = await collections();
		await todos.find({}).toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},
	async delete(req, res) {
		if (req.session.authUser) {
			const { todos } = await collections();
			await todos.findOneAndDelete(req.body);
			res.sendStatus(200);
		} else {
			res.sendStatus(401);
		}
	}
};
