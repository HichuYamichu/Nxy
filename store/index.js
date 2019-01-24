import axios from 'axios';
import { Store } from 'vuex';

export const state = () => ({
	authUser: null,
	isDark: true
});

export const mutations = {
	SET_USER: (state, user) => {
		state.authUser = user;
	},
	THEME: (state, theme) => {
		state.isDark = theme;
	}
};

export const actions = {
	nuxtServerInit(store, { req }) {
		if (req.session && req.session.authUser) {
			store.commit('SET_USER', { username: req.session.authUser.username });
			if (typeof req.session.dark !== 'undefined') {
				store.commit('THEME', req.session.dark);
			}
		}
	},
	async login({ commit }, { username, password }) {
		try {
			const { data } = await axios.post('/api/login', { username, password });
			commit('SET_USER', data);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				throw new Error(error.response.data.message);
			}
			throw error;
		}
	},
	async register({ commit }, { username, password }) {
		try {
			const { data } = await axios.post('/api/register', { username, password });
			commit('SET_USER', data);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				throw new Error(error.response.data.message);
			}
			throw error;
		}
	},

	async logout({ commit }) {
		await axios.post('/api/logout');
		commit('SET_USER', null);
	},

	async setTheme(store) {
		store.commit('THEME', !store.state.isDark);
		if (store.state.authUser) {
			await axios.post('/api/user/settings', { dark: store.state.isDark });
		}
	}
};
