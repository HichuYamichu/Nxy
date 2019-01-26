module.exports = {
	setTheme(req) {
		req.session.dark = req.body.theme;
	}
};
