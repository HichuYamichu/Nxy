const pkg = require('./package');
require('dotenv').config();

module.exports = {
	mode: 'universal',
	router: {
	},
	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		// titleTemplate: `%s | ${this.$route.name}`,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '##5AF2A2', height: '5px', throttle: 200 },

	/*
	** Global CSS
	*/
	css: [
		'~/assets/style/app.styl',
		'~/assets/style/main.css'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@/plugins/vuetify'
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
		'@nuxtjs/dotenv'
	],
	/*
	** Axios module configuration
	*/
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
		baseURL: 'http://127.0.0.1:3000'
	},

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {

		}
	}
};
