export default ({ store, redirect }) => {
	if (!store.state.authUser || store.state.authUser.email !== '1234') {
		return redirect('/login');
	}
};
