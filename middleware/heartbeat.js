import axios from 'axios';

export default async ({ store }) => {
	if (store.state.authUser) {
		await axios.post('http://127.0.0.1:3000/api/heartbeat');
	}
};
