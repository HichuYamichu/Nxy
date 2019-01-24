module.exports = {
	set(req, res) {
		console.log(req.body);
		req.session.dark = req.body.dark;
	}
};
