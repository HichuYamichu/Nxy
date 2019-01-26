const db = require('./index');

module.exports = async () => {
	const dbInstance = await db();

	const Users = dbInstance.collection('Users');
	const Sessions = dbInstance.collection('sessions');
	const Todos = dbInstance.collection('todos');

	const collections = {
		sessions: Sessions,
		users: Users,
		todos: Todos
	};
	return collections;
};
