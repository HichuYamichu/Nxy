
const express = require('express');
const consola = require('consola');
const bodyParser = require('body-parser');
const session = require('express-session');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(session({
	secret: 'super-secret-key',
	resave: false,
	saveUninitialized: false,
	cookie: { maxAge: 60000 }
}));

const authService = require('../api/authService');
// POST `/api/login` to log in the user and add him to the `req.session.authUser`
app.post('/api/login', (req, res) => {
	authService.login(req, res);
});

app.post('/api/register', (req, res) => {
	authService.register(req, res);
});

// POST `/api/logout` to log out the user and remove it from the `req.session`
app.post('/api/logout', (req, res) => {
	delete req.session.authUser;
	res.json({ ok: true });
});

app.set('port', port);

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
	// Init Nuxt.js
	const nuxt = new Nuxt(config);

	// Build only in dev mode
	if (config.dev) {
		const builder = new Builder(nuxt);
		await builder.build();
	}

	// Give nuxt middleware to express
	app.use(nuxt.render);

	// Listen the server
	app.listen(port, host);
	consola.ready({
		message: `Server listening on http://${host}:${port}`,
		badge: true
	});
}
start();
