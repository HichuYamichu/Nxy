module.exports = {
	async dbinit() {
		const db = require('mongodb');
		const url = 'mongodb://localhost:27017';
		const client = await db.MongoClient.connect(url, { useNewUrlParser: true });

		const Users = client.db('nxy').collection('Users');
		const sessions = client.db('nxy').collection('sessions');

		const collections = {
			sessions: sessions,
			users: Users
		};
		return collections;
	}
};
