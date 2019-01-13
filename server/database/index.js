module.exports = {
	async dbinit() {
		const db = require('mongodb');
		const client = await db.MongoClient.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@ds048279.mlab.com:48279/nxy`, { useNewUrlParser: true });

		const Users = client.db('nxy').collection('Users');

		const collections = {
			users: Users
		};
		return collections;
	}
};

