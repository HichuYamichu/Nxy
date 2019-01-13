
const express = require('express');
const consola = require('consola');
const bodyParser = require('body-parser');
const session = require('express-session');
const { Nuxt, Builder } = require('nuxt');
const MongoStore = require('connect-mongo')(session);
const app = express();
require('dotenv').config();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
const store = new MongoStore({ url: `mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@ds048279.mlab.com:48279/nxy`, autoRemove: 'disabled' });

store.on('destroy', () => {
	console.log('logout');
});

app.use(session({
	name: 'cookie',
	store: store,
	secret: 'super-secret-key',
	resave: false,
	saveUninitialized: false,
	cookie: {
		sameSite: true,
		maxAge: 60000
	}
}));

const authService = require('./services/authService');

app.post('/api/login', (req, res) => {
	authService.login(req, res);
});

app.post('/api/register', (req, res) => {
	authService.register(req, res);
});

app.post('/api/logout', (req, res) => {
	req.session.destroy();
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
