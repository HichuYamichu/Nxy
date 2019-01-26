export default ({ store, redirect }) => {
	if (!store.state.authUser || store.state.authUser.type !== 'admin') {
		return redirect('/login');
	}
};
