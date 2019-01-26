export default ({ store, redirect }) => {
	if (!store.state.auth.authUser) {
		return redirect('/login');
	}
};
